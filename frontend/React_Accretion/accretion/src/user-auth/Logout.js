
export default function Logout () {
    const [jwt, setJWT] = useState(JSON.parse(localStorage.getItem('jwt')));
    setJWT({
        "refresh": "",
        "access": ""
    });
    localStorage.setItem('jwt', JSON.stringify(jwt));
};