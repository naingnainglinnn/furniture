import { GalleryVerticalEnd } from "lucide-react"

import { SignupForm } from "@/components/signup-form"

export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7639.743370595562!2d96.19967582654608!3d16.783058334278927!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssg!4v1775823303428!5m2!1sen!2ssg"
          width="600"
          height="450"
          className="rounded-2xl border-0 pt-6"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
