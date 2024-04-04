"use client";
import Image from "next/image";
import React from "react";
import Logo from "/public/icons/darkologo.png";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Invalid email address").min(2).max(50),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be at most 100 characters long")
    .regex(/\d/, "Password must contain at least one digit")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

const Login = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <main className="py-[6rem]">
      <div className="container flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" height={40} width={40} loading="lazy" />
          <p className="font-bold font-inter text-[#100A42]">HelpMeOut</p>
        </div>
        <div className="flex items-center gap-4 flex-col max-w-[550px] self-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="text-center">
              <h1 className="font-bold font-inter text-balance text-[1.4rem] mb-2 md:text-[2rem]">
                Log in or Sign up
              </h1>
              <p className="text-[#434343] text-sm font-light">
                Join millions of others in sharing successful moves on
                <span className="font-normal"> HelpMeOut</span>.
              </p>
            </div>
            <Button variant="outline" className="gap-4 w-full">
              <FcGoogle /> Continue with Google
            </Button>
            <Button variant="outline" className="gap-4 w-full">
              <FaFacebook /> Continue with Facebook
            </Button>
          </div>
          <div className="flex gap-2 w-full items-center">
            <span className="h-[1px] w-full bg-[#B9C2C8]"></span>
            <span>or</span>
            <span className="h-[1px] w-full bg-[#B9C2C8]"></span>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 w-full"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="default" type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default Login;
