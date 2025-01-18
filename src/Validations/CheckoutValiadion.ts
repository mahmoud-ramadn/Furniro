import {z} from 'zod';


const formSchema = z.object({
    firstname: z.string().nonempty("First name is required"),
    lastname: z.string().nonempty("Last name is required"),
    companyname: z.string().optional(),
    streetaddress: z.string().nonempty("Street address is required"),
    townCity: z.string().nonempty("Town/City is required"),
    province: z.string().nonempty("Province is required"),
    zipcode: z.string().regex(/^\d{5}(-\d{4})?$/, {
        message: "ZIP code must be a valid 5-digit or ZIP+4 code",
    }),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
    additioninformation: z.string().optional(),
});

type Formcheckout = z.infer<typeof formSchema>;




const contactformSchema=z.object({
    yourname: z.string().nonempty("your name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().nonempty("subject is required"),
    message: z.string().nonempty("message is required"),
});
type FormValues = z.infer<typeof contactformSchema>;

export {formSchema,contactformSchema  , type FormValues ,type Formcheckout}