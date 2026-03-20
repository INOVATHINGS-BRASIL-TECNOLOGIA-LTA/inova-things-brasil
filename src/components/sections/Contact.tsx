"use client";

import { useTransition, useState } from "react";
import { submitContact } from "@/actions/contact";
import { FadeIn } from "@/components/ui/FadeIn";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Formato de e-mail inválido"),
  company: z.string().min(2, "A empresa deve ter pelo menos 2 caracteres"),
  subject: z.string().min(2, "O assunto deve ter pelo menos 2 caracteres"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact({ dict }: { dict: any }) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", subject: "", message: "" }
  });

  const onSubmitForm = (data: ContactFormValues) => {
    setStatus("idle");
    startTransition(async () => {
      try {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => formData.append(key, value));
        
        const result = await submitContact(formData);
        if (result.success) {
          setStatus("success");
          reset();
        } else {
          setStatus("error");
        }
      } catch (e) {
        setStatus("error");
      }
    });
  };

  return (
    <section id="contato" className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 border-t border-zinc-200 dark:border-zinc-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">{dict.title}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12">{dict.description}</p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-zinc-900/80 flex items-center justify-center text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">{dict.corporateEmail}</p>
                  <a href="mailto:contato@nat.ia.br" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-white transition-colors cursor-pointer">contato@nat.ia.br</a>
                </div>
              </div>
              
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-white dark:bg-zinc-900/80 flex items-center justify-center text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 shadow-sm transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 mb-1">{dict.phone}</p>
                  <a href="tel:+556181831244" className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-white transition-colors">(61) 8183-1244</a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white dark:bg-zinc-900/40 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl backdrop-blur-sm transition-colors">
            <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className={`text-sm font-medium transition-colors ${errors.name ? 'text-red-500 dark:text-red-400' : 'text-zinc-700 dark:text-zinc-300'}`}>{dict.form.name}</label>
                  <input id="name" {...register("name")} className={`w-full bg-zinc-50 dark:bg-zinc-950/80 border rounded-md px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all font-medium ${errors.name ? 'border-red-500 dark:border-red-500/50 focus:ring-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:ring-zinc-400 dark:focus:ring-zinc-700'}`} placeholder={dict.form.namePlaceholder} />
                  {errors.name && <p className="text-red-500 dark:text-red-400 text-xs font-semibold mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className={`text-sm font-medium transition-colors ${errors.email ? 'text-red-500 dark:text-red-400' : 'text-zinc-700 dark:text-zinc-300'}`}>{dict.form.email}</label>
                  <input type="email" id="email" {...register("email")} className={`w-full bg-zinc-50 dark:bg-zinc-950/80 border rounded-md px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all font-medium ${errors.email ? 'border-red-500 dark:border-red-500/50 focus:ring-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:ring-zinc-400 dark:focus:ring-zinc-700'}`} placeholder={dict.form.emailPlaceholder} />
                  {errors.email && <p className="text-red-500 dark:text-red-400 text-xs font-semibold mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className={`text-sm font-medium transition-colors ${errors.company ? 'text-red-500 dark:text-red-400' : 'text-zinc-700 dark:text-zinc-300'}`}>{dict.form.company}</label>
                <input id="company" {...register("company")} className={`w-full bg-zinc-50 dark:bg-zinc-950/80 border rounded-md px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all font-medium ${errors.company ? 'border-red-500 dark:border-red-500/50 focus:ring-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:ring-zinc-400 dark:focus:ring-zinc-700'}`} placeholder={dict.form.companyPlaceholder} />
                {errors.company && <p className="text-red-500 dark:text-red-400 text-xs font-semibold mt-1">{errors.company.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className={`text-sm font-medium transition-colors ${errors.subject ? 'text-red-500 dark:text-red-400' : 'text-zinc-700 dark:text-zinc-300'}`}>{dict.form.subject}</label>
                <input id="subject" {...register("subject")} className={`w-full bg-zinc-50 dark:bg-zinc-950/80 border rounded-md px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all font-medium ${errors.subject ? 'border-red-500 dark:border-red-500/50 focus:ring-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:ring-zinc-400 dark:focus:ring-zinc-700'}`} placeholder={dict.form.subjectPlaceholder} />
                {errors.subject && <p className="text-red-500 dark:text-red-400 text-xs font-semibold mt-1">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className={`text-sm font-medium transition-colors ${errors.message ? 'text-red-500 dark:text-red-400' : 'text-zinc-700 dark:text-zinc-300'}`}>{dict.form.message}</label>
                <textarea id="message" rows={4} {...register("message")} className={`w-full bg-zinc-50 dark:bg-zinc-950/80 border rounded-md px-4 py-3 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:ring-2 transition-all resize-none font-medium ${errors.message ? 'border-red-500 dark:border-red-500/50 focus:ring-red-500/50' : 'border-zinc-200 dark:border-zinc-800 focus:ring-zinc-400 dark:focus:ring-zinc-700'}`} placeholder={dict.form.messagePlaceholder}></textarea>
                {errors.message && <p className="text-red-500 dark:text-red-400 text-xs font-semibold mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isPending}
                className="w-full bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-semibold py-4 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-lg cursor-pointer"
              >
                {isPending ? (
                  <span className="flex items-center gap-3">
                    <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    {dict.form.submitPending}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {dict.form.submit}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                )}
              </button>

              {status === "success" && (
                <div className="p-4 rounded-md bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 font-medium text-center text-sm">
                  {dict.form.success}
                </div>
              )}
              {status === "error" && (
                <div className="p-4 rounded-md bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-500 font-medium text-center text-sm">
                  {dict.form.error}
                </div>
              )}
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}