import { Github, Linkedin, Mail } from "lucide-react"

export const Footer = () => {
    return(
        <footer className="w-full h-full border text-center flex justify-center gap-2 p-2">
            <p className="flex">made with love by @jsandi <span className="font-bold mx-1">|</span> contacts</p>
            <a target="_blank" href="https://github.com/jsandicr">
                <Github strokeWidth={1.25} />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/jorge-sandi-0b363b206/">
                <Linkedin strokeWidth={1.25} />
            </a>
            <a target="_blank" href="mailto:jsandicr16@gmail.com">
                <Mail strokeWidth={1.25} />
            </a>
        </footer>
    )
}