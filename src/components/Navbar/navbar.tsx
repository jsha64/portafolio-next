interface MyChildrenProps {
    children: React.ReactNode;
}

export const Navbar = ({ children }: MyChildrenProps) => {
    return (
        <nav className="flex border border-white w-[100%] ">
            {children}
        </nav>
    )
}