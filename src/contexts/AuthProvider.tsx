import auth from '@/lib/firebase'
import Token from '@/lib/token'
import {
  type User,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  UserCredential,
} from 'firebase/auth'
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'

type AuthProviderState = {
  loading: boolean
  user: User | null
  loginWithGoogle: () => Promise<UserCredential>
  signUp: (
    fullName: string,
    photoUrl: string,
    email: string,
    password: string
  ) => ReturnType<typeof createUserWithEmailAndPassword>
  logIn: (
    email: string,
    password: string
  ) => ReturnType<typeof signInWithEmailAndPassword>
  logOut: () => void
  resetPassword: (email: string) => void
  editProfile: (data: {
    displayName?: string | null
    photoURL?: string | null
  }) => void
}

const provider = new GoogleAuthProvider()

const AuthProviderContext = createContext({} as AuthProviderState)

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<null | User>(null)
  const [isProfileUpdate, setIsProfileUpdate] = useState(0)

  const loginWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const signUp: AuthProviderState['signUp'] = (
    fullName,
    photoUrl,
    email,
    password
  ) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (cred) => {
        updateProfile(cred.user, {
          displayName: fullName,
          photoURL: photoUrl,
        }).then(() => setIsProfileUpdate(Math.random()))

        return cred
      }
    )
  }

  const logIn: AuthProviderState['logIn'] = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const logOut = async () => {
    signOut(auth)
    await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
      method: 'DELETE',
      credentials: 'include',
    })
  }

  const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email, { url: import.meta.env.VITE_APP_URL })
  }

  const editProfile: AuthProviderState['editProfile'] = (payload) => {
    if (user) {
      updateProfile(user, payload).then(() => {
        setIsProfileUpdate(Math.random())
      })
    }
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user: User | null) => {
      user?.getIdTokenResult().then((token) => {
        Token.setToken(token.token)
      })

      setUser(user)

      const getToken = async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/token`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            name: user?.displayName,
            email: user?.email,
            photoUrl: user?.photoURL,
          }),
        })

        if (!res.ok) {
          console.log(res)
        }
      }

      getToken()

      setLoading(false)
    })

    return () => {
      Token.setToken('')
      unSubscribe()
    }
  }, [isProfileUpdate])

  const value: AuthProviderState = {
    loading,
    user,
    loginWithGoogle,
    signUp,
    logIn,
    logOut,
    resetPassword,
    editProfile,
  }

  return (
    <AuthProviderContext.Provider value={value}>
      {children}
    </AuthProviderContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthProviderContext)

export default AuthProvider
