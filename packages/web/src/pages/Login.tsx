import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useMutation } from '@tanstack/react-query';
import { handelLogin } from "@/api/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // 🔁 使用 react-query 进行登录处理
  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => handelLogin(data),
    onSuccess: async (res) => {
      if (res.code === 200) {
        const data = res.data;
        login(email,password,data.user.name,data.token)
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        navigate('/dashboard', { replace: true });
      }else{
        toast({
          title: "Login failed",
          description: "Please check your credentials and try again",
          variant: "destructive",
        });

      }
    },
    onError: () => {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    }
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      email,
      password,
    } as any);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background to-secondary/30">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>

      <div className="w-full max-w-md animate-fade-in">
        <div className="glassmorphism rounded-xl shadow-xl p-8 md:p-10">
          <div className="text-center mb-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center mb-6 h-12 w-12 rounded-full bg-primary/10 text-primary"
            >
              {/* logo svg */}
            </Link>
            <h1 className="text-2xl font-bold font-display tracking-tight mb-2">Welcome back</h1>
            <p className="text-muted-foreground">Sign in to continue to EmailFlow</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="#" className="text-sm text-primary hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full h-12 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account?</span>{" "}
            <Link to="/register" className="text-primary hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
