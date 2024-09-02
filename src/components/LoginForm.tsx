import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";
import { useForm } from "@tanstack/react-form";
import { supabase } from "../supabaseClient";
import { useNavigate } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";

export default function Component() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      setStatus("loading");
      console.log("value", value);
      try {
        const result = await supabase.auth.signInWithPassword({
          email: value.email,
          password: value.password,
        });
        console.log("Sign-in result:", result);

        if (result.error) {
          console.error("Sign-in error:", result.error);
          if (result.error.message.includes("gotrue_meta_security")) {
            throw new Error(
              "Security check failed. Please try again or contact support."
            );
          }
          throw result.error;
        }

        setStatus("success");
        setMessage("Login successful");
        navigate({ to: "/businesses" });
      } catch (error) {
        setStatus("error");
        setMessage(
          error instanceof Error ? error.message : "An error occurred"
        );
      }
    },
    validatorAdapter: zodValidator(),
  });

  return (
    <Card className="mx-auto w-[90%] max-w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
        <CardDescription>Login to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <form.Field
                name="email"
                children={(field) => (
                  <>
                    <Input
                      name={field.name}
                      type="email"
                      id="email"
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                      }}
                      placeholder="m@example.com"
                      required
                    />
                  </>
                )}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <form.Field
                name="password"
                children={(field) => (
                  <Input
                    name={field.name}
                    onChange={(e) => {
                      field.handleChange(e.target.value);
                    }}
                    type="password"
                    id="password"
                    required
                  />
                )}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full mt-6"
            disabled={status === "loading" || !form.state.isValid}
          >
            {status === "loading" ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {status !== "idle" && status !== "loading" && (
          <Alert
            variant={status === "success" ? "default" : "destructive"}
            className="mt-4 w-full"
          >
            <AlertTitle>
              {status === "success" ? "Success" : "Error"}
            </AlertTitle>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
