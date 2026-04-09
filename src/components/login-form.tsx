import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Apple or Google account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <Button type="button" className="w-full border">
                  Login with Apple
                </Button>
                <Button type="button" className="w-full border">
                  Login with Google
                </Button>
              </Field>

              <FieldSeparator>Or continue with</FieldSeparator>

              <Field>
                <FieldLabel>Email</FieldLabel>
                <Input type="email" placeholder="m@example.com" required />
              </Field>

              <Field>
                <FieldLabel>Password</FieldLabel>
                <Input type="password" required />
              </Field>

              <Field>
                <Button type="submit" className="w-full">
                  Login
                </Button>

                <FieldDescription className="text-center">
                  Don’t have an account? Sign up
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="text-center">
        Terms & Privacy Policy
      </FieldDescription>
    </div>
  )
}
