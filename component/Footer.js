
const footerStyle = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "30%"
}

const Footer = () => {
    return (
        <>
        <footer style={footerStyle} className="footer">
            <hr />
            <div className="text-center center-block">
                <p className="txt-railway">- R E A C T I V A -</p>
                <pan>La Economía de México</pan> <br/>
                <br />
                <a href="https://www.facebook.com/ReActiva-102371358111286/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                <a href="https://twitter.com/activa_re"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                <a href="https:/mailto:empresa.reactiva@gmail.com"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                
            </div>
            <hr />
        </footer>
        <style jsx>
        {
            `
                footer {
                    position: absolute;
                    bottom: 0px;
                    width: 100%;
                    height: 20%;
                    background-color:#302E2E ;
                }
                i {
                    color:#EE442C;
                }
            `
        }
    </style>
    </>
        
    );
}

export default Footer;