function Footer()
{
    const time = new Date().getFullYear();

    return <footer className="footer">
        Copyright &copy; {time}
    </footer>
}

export default Footer;