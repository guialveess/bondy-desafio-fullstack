import { useState } from "react"
import { gql, useMutation } from "@apollo/client"
import type { User } from "../App"
import { LoginForm } from "@/components/login-form"

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      company
      createdAt
      updatedAt
    }
  }
`

type Props = {
  onSuccess: (u: User) => void
}

export default function LoginPage({ onSuccess }: Props) {
  const [email, setEmail] = useState("desafio@bondy.com.br")
  const [password, setPassword] = useState("123456")
  const [error, setError] = useState<string | null>(null)

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted: (data) => onSuccess(data.login as User),
    onError: (err) => setError(err.message || "Erro ao fazer login"),
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    login({ variables: { email, password } })
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 flex min-h-svh flex-col items-center justify-center gap-8 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-8">
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
              Bem-vindo de volta!
            </h1>
          </div>
        </div>
        <LoginForm
          email={email}
          password={password}
          error={error}
          loading={loading}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}