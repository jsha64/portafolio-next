interface MyChildrenProps {
    children: React.ReactNode;
}

export const Navbar: React.FC<MyChildrenProps> = ({children}) => {
    return (
        <nav className="flex border border-white w-[100%] ">
            {children}
        </nav>
    )
}