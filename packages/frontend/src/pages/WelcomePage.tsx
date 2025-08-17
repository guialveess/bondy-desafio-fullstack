import type { User } from "../App";
import { LogOut, Mail, Building2, Calendar, Clock } from "lucide-react";

type Props = {
  user: User;
  onLogout: () => void;
};

export default function WelcomePage({ user, onLogout }: Props) {
  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden">
          <div className="px-8 pt-8 pb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Olá, {user.name ? user.name.split(" ")[0] : "Usuário"}! 👋
            </h1>
          </div>

          <div className="px-8 pb-8 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50/70 rounded-xl">
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Nome completo
                  </p>
                  <p className="text-gray-900 font-medium">
                    {user.name || "Não informado"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50/70 rounded-xl">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Email</p>
                  <p className="text-gray-900 font-medium">
                    {user.email || "Não informado"}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50/70 rounded-xl">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Empresa</p>
                  <p className="text-gray-900 font-medium">
                    {user.company || "Não informado"}
                  </p>
                </div>
              </div>

              {user.createdAt && (
                <div className="flex items-center space-x-3 p-3 bg-gray-50/70 rounded-xl">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Membro desde
                    </p>
                    <p className="text-gray-900 font-medium">
                      {new Date(user.createdAt).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}

              {user.updatedAt && (
                <div className="flex items-center space-x-3 p-3 bg-gray-50/70 rounded-xl">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Última atualização
                    </p>
                    <p className="text-gray-900 font-medium">
                      {new Date(user.updatedAt).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={onLogout}
              className="animate-element animate-delay-600 w-full rounded-2xl bg-red-500 py-4 text-white font-semibold hover:bg-red-600 transition-colors flex items-center justify-center"
            >
              <LogOut className="w-4 h-4 mr-2 flex-shrink-0" />
              Sair da conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
