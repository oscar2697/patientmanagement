"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form,} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"

export enum FormFieldTypes {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
}

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function PatientForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header">Hi There 👋🏻</h1>
                    <p className="text-dark-700">Schedule your appointment</p>
                </section>

                <CustomFormField 
                    fieldType={FormFieldTypes.INPUT}
                    control={form.control} 
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />

                <CustomFormField 
                    fieldType={FormFieldTypes.INPUT}
                    control={form.control} 
                    name="email"
                    label="Email"
                    placeholder="example@emai.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />

                <CustomFormField 
                    fieldType={FormFieldTypes.PHONE_INPUT}
                    control={form.control} 
                    name="phone"
                    label="Phone Number"
                    placeholder="(099) 123 4567"
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
export default PatientForm
