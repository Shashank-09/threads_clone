"use client"

import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { UserValidation } from "@/lib/validations/user";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Textarea } from "../ui/textarea";
import { isBase64Image } from "@/lib/utils";
import { useUploadThing } from '@/lib/uploadthing'
import { updateUser } from "@/lib/actions/user.actions";
import { usePathname , useRouter} from "next/navigation";
import path from "path";

interface Props {
  user:{
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}





function PostThread({ userId}: {userId: string}){
const [files, setFiles] = useState<File[]>([])
const { startUpload } = useUploadThing("media")
const router = useRouter();
const pathname = usePathname();
 
    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: user?.image || "",
            name: user?.name || "",
            username: user?.username || "",
            bio: user?.bio || "",
          },
    })
    return <h1>Post Thread Form</h1>
}

export default PostThread;