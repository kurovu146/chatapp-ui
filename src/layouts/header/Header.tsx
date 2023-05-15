import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import '../../styles/layouts/Header.css';
import { useNavigate } from "react-router";


export default function Header() {
  const [auth, setAuth] = useState(true);
  const [content, setContent] = useState('');
  const [redirect, setRedirect] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(13, 'change', auth);
    
    if (auth) {
      setRedirect('/login');
      setContent('Log out')
    } else {
      setRedirect('/');
      setContent('Sign in')
    }
  }, [auth])

  return (
    <div className="header p-2">
      <Button content="Kuro App" onClick={() => navigate('/')} />
      <Button content={content} onClick={() => {
        setAuth(!auth);
        navigate(redirect);
      }} />
    </div>
  )
}