
import React, { useEffect, useState } from 'react'
import { Router, useRouter } from 'next/router'
import styled from 'styled-components'
import { app } from '../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const Register = () => {
    const auth = getAuth()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const SignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((response) => {
                sessionStorage.setItem('Token', response.user.accessToken)
                router.push('/')
            })
    }
    const SignUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((response) => {
                console.log(response.user)
                sessionStorage.setItem('Token', response.user.accessToken)
                router.push('/')
            })
    }
    useEffect(() => {
        let token = sessionStorage.getItem('Token')
        if (token) {
            router.push('/home')
        }
    })
    return (
        <Container>
            <Flex>
                <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={SignUp}>Login</Button>
                <Button onClick={SignUpWithGoogle}>Sign Up with Google</Button>
            </Flex>
        </Container>
    )
}

export default Register

const Container = styled.div`
     display:flex;
     width:100vw;
     height:100vh;
     justify-content:center;
`
const Flex = styled.div`
   display:flex;
   flex-direction:column;   
    max-width:400px; 
    align-items:center;
    justify-content:center;
`
const Input = styled.input`
    margin-bottom:8px;
    width:200px;

`


const Button = styled.button`

`