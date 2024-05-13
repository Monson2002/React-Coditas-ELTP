export interface SignupProps { 
    toggleLogin: any;
    signupUser: any;
} 

export type SignupInputs = {
    name: string;
    username: string;
    password: string;
    confirmPassword: string;
}