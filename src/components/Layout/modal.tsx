// import {
//     Dialog,
//     DialogContent,
//     DialogTrigger,
// } from "@/components/ui/dialog";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { FcGoogle } from "react-icons/fc";
// import * as React from "react";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import nkay from "../../../public/nkay.png";
// import Image from "next/image";

// export default function SignUpModal() {
//     const { data: session } = useSession();
//     const router = useRouter();
//     const [error, setError] = React.useState("");

//     React.useEffect(() => {
//         if (session) {
//             router.replace('/');
//         }
//     }, [session, router]);

//     const handleLoginWithGoogle = async () => {
//         const result = await signIn("google", { redirect: false });

//         if (!result) {
//             console.error("No response from signIn function");
//             return;
//         }

//         if (result.error) {
//             setError(result.error); // Show error if login fails
//         } else {
//             router.push("/"); // Redirect on successful login
//         }
//     };

//     return (
//         <Dialog>
//             <DialogTrigger className="bg-black font-bold w-20 h-8 text-white rounded hover:opacity-75 hover:bg-black">
//                 Sign Up
//             </DialogTrigger>
//             <DialogContent className="flex justify-center items-center border-none">
//                 <Card className="w-[400px] bg-white flex flex-col justify-center rounded-3xl">
//                     <CardHeader>
//                         <CardTitle className="text-center flex justify-center text-3xl"><Image src={nkay} alt="nkay image" width={200} height={200} /></CardTitle>
//                     </CardHeader>
//                     <CardContent className="grid grid-rows-2 gap-4">
//                         <Button
//                             onClick={handleLoginWithGoogle}
//                             className="rounded-3xl bg-[#F6F5F2] text-xl"
//                         >
//                             <FcGoogle /> Login with Google
//                         </Button>
//                         {error && (
//                             <div className="mt-4 text-red-600 text-center">
//                                 {error} {/* Display the error message */}
//                             </div>
//                         )}
//                     </CardContent>
//                 </Card>
//             </DialogContent>
//         </Dialog>
//     );
// }
