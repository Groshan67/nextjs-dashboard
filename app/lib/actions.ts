'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    customer_Id: z.string({ invalid_type_error: 'Please select a customer.' }),
    amount: z.coerce.number()
        .gt(0, { message: 'Please enter an amount greater than $0.' }),
    status: z.enum(['pending', 'paid'], {
        invalid_type_error: 'Please select an invoice status',
    }),
    date: z.string(),
});

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

const CreateInvoice = FormSchema.omit({ id: true, date: true })
const UpdateInvoice = FormSchema.omit({ id: true, date: true })

export type State = {
    errors?: {
        customer_Id?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
}

//roshan edit export async function createInvoice(formData: FormData) {
export async function createInvoice(prevState: State, formData: FormData) {


    const validatedFields = CreateInvoice.safeParse({
        customer_Id: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Invoice.'
        }
    }


    const { customer_Id, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try {
        await sql`
    INSERT INTO invoices (customer_Id,amount,status,date)
    VALUES(${customer_Id},${amountInCents},${status},${String(date)})
    `;
    } catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to Create Invoice',

        }
    }


    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices')
}

export async function updateInvoice(id: string, prevState: State, formData: FormData) {


    const validatedFields = UpdateInvoice.safeParse({
        customer_Id: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });


    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields,Failed to Update Invoice."

        }
    }

    const { customer_Id, amount, status } = validatedFields.data;

    const amountInCents = amount * 100;
    try {
        await sql`
        UPDATE invoices
        SET amount = ${amountInCents},
            status = ${status},
            customer_Id = ${customer_Id}
        WHERE id = ${id}
        `;
    } catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to Update Invoice.'
        }
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
    // throw new Error('Failed to Delete Invoices.');
    try {
        await sql`DELETE FROM Invoices WHERE id=${id}`;
        revalidatePath('/dashboard/invoices');
        return { message: 'Deleted Invoice.' }

    } catch (error) {
        console.log(error)
        return { message: 'Database Error: Failed to Delete Invoice' }
    }
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        console.log('rrrrr', error)
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

