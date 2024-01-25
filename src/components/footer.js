import { Logo } from "./header"

const Footer = () => {
    return (
        <footer>
            <div className="footerwrapper">
                <Logo />
                <ul className="footerlinks">
                    home | whatever
                </ul>
                <p>Copyright @megha</p>
            </div>
        </footer>
    )
}

export default Footer;
