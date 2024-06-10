import styled from "styled-components";



export const FirstSection = styled.section`
    background-color: #000;
    height: 101vh;
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FirstSectionImg = styled.img`
    width: 100%;
    height: 100vh;
    z-index: 1;
    opacity: 1;
    position: absolute;
    top: 0;
    opacity: 0.05;
    z-index: -1;
`;

export const WebDev = styled.h3`
    font-size: 80px;
    color: #9687F9;
    margin: 0;
    padding: 0;
    position: relative;
    @keyframes typing{
        0%{
            width: 100%;
        }
        30%{
            width: 0px;
        }
        100%{
            border-left: none;
            width: 0px;
        }
        
    }

    &::after{
        content: "";
        border-left: 1px solid #fff;
        background-color: #000;
        width: 100%;
        height: 100%;
        position: absolute;
        right: -1px;
        animation: typing 3.5s forwards;
        
    }

    @media(max-width: 1024px){
        font-size: 60px;
    }

    @media(max-width: 768px){
        font-size: 30px;
    }
    @media (max-width: 425px){
        font-size: 20px;
    }
`;

export const FullStack = styled.h3`
    font-size: 80px;
    color: #5CE6BB;
    margin: 0;
    padding: 0;
    position: relative;
    

   @keyframes typing{
    0%{
            width: 100%;
            border-left: 1px solid #fff;
        }
        30%{
            width: 0px;
        }
        100%{
            border-left: none;
            width: 0px;
   }
   }

   &::after{
    content: "";
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    right: 0%;
    
    animation-name: typing;
    animation-duration: 3.5s;
    animation-delay: 1.2s;
    animation-fill-mode: forwards;
   }

    @media(max-width: 1024px){
        font-size: 60px;
    }

    @media(max-width: 768px){
        font-size: 30px;
    }
    @media (max-width: 425px){
        font-size: 20px;
    }
`;

export const Profession = styled.div`
    display: flex;

    span{
        color: #fff;
        font-size: 80px;
        animation-name: myspan;
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-delay: 0.8s;
        opacity: 0;
    }
    

    @keyframes myspan{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @media(max-width: 1024px){
        span{
            font-size: 60px;
        }
    }
    @media(max-width: 768px){
        span{
            font-size: 30px;
        }
        
    }
    @media (max-width: 425px){
        span{
            font-size: 20px;
        }
    }
`;


export const MyName = styled.h1`
    font-size: 112px;
    color: #fff;
    margin: 0;
    padding: 0;
    @media(max-width: 1024px){
        font-size: 92px;
    }

    @media(max-width: 768px){
        font-size: 60px;
    }
    @media(max-width: 425px){
        font-size: 30px;
    }
`;


export const ContactButton = styled.button`
    padding: 15px 50px;
    background-color: #FDCE2B;
    border: none;
    border-radius: 12px;
    color: #000;
    font-size: 30px;
    
    cursor: pointer;

    p{
        font-weight: 200;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 1024px){
        padding: 10px 45px;
        font-size: 20px;
    }

    @media (max-width: 768px){
        padding: 5px 30px;
        font-size: 15px;
    }
`;

export const SecondSection = styled.section`
    height: 1000px;
    background: linear-gradient(180deg, #C0C0C0 86%, #000);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 0px 15%;

    h3{
        z-index: 3;
        font-size: 70px;
        margin: 0;
        padding: 0;
        position: relative;
    }
    span{
        width: 800px;
        height: 800px;
        z-index: 2;
        background-color: #fff;
        filter: blur(80px);
        display: block;
        border-radius: 9999px;
        position: absolute;
    }
    img{
        z-index: 3;
        position: relative;
        width: 70%;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    @media (max-width: 1280px){
        padding: 0 5%;
        height: 800px;
        h3{
            font-size: 60px;
        }
        span{
        width: 600px;
        height: 600px;
        z-index: 2;
        background-color: #fff;
        filter: blur(80px);
        display: block;
        border-radius: 9999px;
        position: absolute;
        
    }

    @media(max-width: 1024px){
        height: auto;
        padding: 100px 5%;
        h3{
            font-size: 50px;
        }
        
    }

    @media(max-width: 768px){
        h3{
            font-size: 30px;
        }

        span{
            width: 200px;
            height: 200px;
        }
    }
    }
    @media(max-width: 425px){
        padding: 50px 5%;
        h3{
            font-size: 18px;
            margin: 10px 0px;
        }
    }
`;


export const ThirdSection = styled.section`
    height: auto;
    
    background-color: #000;
    padding: 100px 15%;

    img{
        width: 100%;
    }

    h3{
        margin: 0px 0px;
        padding: 40px 0px;
        color: #fff;
        font-size: 80px;
        height: 50px;
        text-align: center;
    }
    @media (max-width: 1280px){
        padding: 0 5%;
    }

    @media (max-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 5%;
        h3{
            font-size: 55px;
        }
        img{
            width: 80%;
        }
    }
    @media(max-width: 758px){
        h3{
            font-size: 35px;
        }
    }

    @media(max-width: 425px){
        padding: 50px 5%;
        h3{
            font-size: 20px;
        }
    }
`;

export const ComplementalSection = styled.section`
    height: 1000px;
    background: #000;
    padding: 0px 15%;

    h3{
        margin: 0px 0px;
        padding: 40px 0px;
        color: #fff;
        font-size: 80px;
        height: 50px;
        text-align: center;
    }

    h6{
        margin: 0;
        padding: 0;
        font-size: 20px;
        color: #fff;
        display: block;
        text-align: right;
        cursor: pointer;
    }

    div{
        margin: auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    a{
        text-decoration: none;
        margin: 30px 0px;
        position: relative;
        z-index: 2;
    }
    p{
        color: #fff;
        text-decoration: none;
        text-align: center;
        font-size: 20px;
        padding: 0;
        margin: 0px;
        margin-bottom: 0px;
        position: relative;
        z-index: 2;
    }


    img{
        margin: 0px 0px;
        position: relative;
        z-index: 2;
    }

    span{
        width: 50%;
        aspect-ratio: 1/1;
        background-color: #fff;
        position: absolute;
        top: 0;
        transform: translate(50%, -5%);
        z-index: 0;
        border-radius: 9999px;
        opacity: 0.2;
        filter: blur(80px);
    } 

    @media(max-width: 1500px){
        img{
            width: 400px;
    }

    @media(max-width: 1280px){
        padding: 0 5%;
        img{
            width: 420px;
    }
    }

    @media(max-width: 1024px){
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        img{
            width: 300px;
        }
        h3{
            font-size: 70px;
        }
        div{
            margin: 0;
        }
    }
    }

    @media (max-width: 768px){
        padding: 100px 5%;
        div{
            flex-direction: column;
    }
    h3{
            font-size: 50px;
        }
    }

    @media(max-width: 425px){
        height: auto;
        justify-content: center;
        padding: 25px 5%;
        h3{
            font-size: 30px;
        }
        img{
            width: 200px;
            display: block;
            margin: auto;
        }
        h6{
            font-size: 12px;
        }
        p{
            font-size: 14px;
            margin: 10px 0px;
        }
    }
`;


export const FourthSection = styled.section`
    height: 1200px;
    background-color: #C0C0C0;
    background: url("/assets/images/app.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    h3{
        margin: 0;
        padding: 0;
        font-size: 100px;
        text-align: center;
        color: #fff;
    }

    @media(max-width: 1280px){
        h3{
            font-size: 80px;
        }
    }

    @media(max-width: 1024px){
        h3{
            font-size: 70px;
        }
    }
    @media(max-width: 768px){
        height: 800px;
        h3{
            padding-top: 50px;
            font-size: 42px;
        }
    }

    @media(max-width: 425px){
        height: 650px;
        h3{
            font-size: 27px;
        }
    }
`;


export const FiveSection = styled.section`
    height: auto;
    padding: 0 15%;
    background: url("/assets/images/coding.png");
    background-color: #000;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    h3{
        margin: 0;
        padding: 0;
        font-size: 100px;
        text-align: center;
        color: #fff;
    }

    h4{
        margin: 0;
        padding: 0;
        font-size: 80px;
        text-align: center;
        color: #fff;
        height: 120px;
    }
    @media (max-width: 1280px){
        padding: 0 5%;
    }
    @media (max-width: 1024px){
        h3{
            font-size: 80px;
        }

        h4{
            font-size: 60px;
        }
    }

    @media (max-width: 768px){
        height: auto;
        h4{
            font-size: 40px;
        }
    }
    @media(max-width: 425px){
        h3{
            font-size: 40px;
        }
        h4{
            font-size: 25px;
            height: auto;
        }
    }
`;

export const SkillsDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    p{
        color: #5CE6BB;
        text-align: center;
        font-size: 40px;
        margin: 0;
        padding: 0;
        height: 70px;
    }
    div{
        width: 250px;
        height: 250px;
        border: 1px solid #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h4{
        display: block;
        width: 100%;
    }

    ul, li{
        margin: 0;
        padding: 0;
    }
    li{
        width: 6px;
        height: 40px;
    }
    ul{
        list-style-type: none;
        display: flex;
        gap: 11px;
        alig-items: center;
        justify-content: center;
    }

    

    span{
        display: block;
        color: #fff;
        text-align: end;
        font-size: 15px;
        margin-right: 44px;
        align-self: flex-end;
        color: #fff;
    }

    @media(max-width: 1500px){
        div{
        width: 200px;
        height: 200px;
        }
    }

    @media(max-width: 1024px){
        div{
            width: 150px;
            height: 150px;
        }
        ul{
            gap: 9px;
        }
        li{
            width: 5px;
            height: 35px;
        }
        p{
            font-size: 26px;
            height: auto;
        }
        span{
            margin-right: 8px;
        }
    }

    @media(max-width: 768px){
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        
        div{
            width: 150px;
            height: 150px;
            margin: 20px 10px;
        }
        ul{
            gap: 9px;
        }
        li{
            width: 4px;
            height: 35px;
        }
        p{
            font-size: 25px;
        }
        span{
            font-size: 15px;
            margin-right: 18px;
        }
        
    }
    @media(max-width: 425px){
        p{
            font-size: 20px;
        }
        li{
            width: 3px;
            height: 30px;
        }
        span{
            font-size: 12px;
        }
    }
`;

export const OtherSkills = styled.div`
        display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    p{
        color: #5CE6BB;
        text-align: center;
        font-size: 40px;
        margin: 0;
        padding: 0;
        height: 70px;
    }
    div{
        width: 250px;
        height: 250px;
        border: 1px solid #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h4{
        display: block;
        width: 100%;
    }

    ul, li{
        margin: 0;
        padding: 0;
    }
    li{
        width: 6px;
        height: 40px;
    }
    ul{
        list-style-type: none;
        display: flex;
        gap: 11px;
        alig-items: center;
        justify-content: center;
    }

    

    span{
        display: block;
        color: #fff;
        text-align: end;
        font-size: 15px;
        margin-right: 44px;
        align-self: flex-end;
        color: #fff;
    }

    @media(max-width: 1500px){
        div{
            width: 200px;
        height: 200px;
        }
    }

    @media(max-width: 1024px){
        div{
            width: 150px;
            height: 150px;
        }
        ul{
            gap: 9px;
        }
        li{
            width: 5px;
            height: 35px;
        }
        p{
            font-size: 26px;
            height: auto;
        }
        span{
            margin-right: 8px;
        }
    }

    @media(max-width: 768px){
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        
        div{
            width: 150px;
            height: 150px;
            margin: 20px 10px;
        }
        ul{
            gap: 9px;
        }
        li{
            width: 4px;
            height: 35px;
        }
        p{
            font-size: 25px;
        }
        span{
            font-size: 15px;
            margin-right: 18px;
        }
        
    }
`;


export const ActiveLi = styled.li`
        
        background-color: #5CE6BB;
`;

export const GrayLi = styled.li`
        background-color: #fff;
`;


export const TwoSkills = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    `;


export const TwoSkillsText = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`;


export const SixSection = styled.section`
    height: auto;
    display: flex;
    justify-content: space-between;
    background-color: #000;
    color: #fff;
    padding: 100px 15%;

    @media(max-width: 1280px){
        padding: 100px 5%;   
    }
    @media(max-width: 768px){
        padding: 20px 5%;
        flex-direction: column;
    }

`;

export const SixLeft = styled.div`
    display: flex;
        flex-direction: column;
        flex: 1;
    h4{
        font-size: 45px;
        margin:0;
        padding: 0;
    }

    div{
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 10px 0px;
        img{
            width: 64px;
            height: 64px;
        }

        p{
        font-size: 20px;
        margin-left: 10px;
    }
    }

    @media(max-width: 1024px){
        h4{
            font-size: 35px;
        }
        div{

        img{
            width: 48px;
            height: 48px;
        }

        p{
            font-size: 15px;
        }
        }
    }

    @media (max-width: 768px){
        margin: 50px 0px;
        h4{
            font-size: 25px;
        }
    }
    
`;

export const SixRight = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    h4{
        margin: 0;
        padding:0; 
        font-size: 45px;
    }

    button{
        height: 50px;
        width: 200px;
        border-radius: 10px;
        font-weight: 100;
        background-color: #FDCE2B;
        border: none;
        cursor: pointer;
    }

    @media(max-width: 1024px){
        h4{
            font-size: 35px;
        }  

        button{
            height: 40px;
            width: 180px;
        }
    }
    @media (max-width: 768px){
        h4{
            font-size: 25px;
        }
    }
    
    

    
`;

export const NameAndEmailInputs = styled.div`
    display: flex;
    justify-content: space-between;

    input{
        width: 45%;
        background: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        font-size: 20px;
        font-weight: 100;
        line-height: 50px;
        color: #fff;

        &::placeholder{
        color: #fff;
    }
    }
    margin-bottom: 100px;

    @media(max-width: 1024px){
        input{
            line-height: 40px;
            font-size: 15px;
        }
    }

`;


export const MessageInput = styled.div`


    width: 100%;
    textarea{
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        line-height: 60px;
        resize: none;
        outline: none;
        font-size: 20px;
        color: #fff;
        font-weight: 100;

        &::placeholder{
        color: #fff;
    }
    }
    @media(max-width: 1024px){
        textarea{
            font-size: 15px;
            line-height: 40px;
    }
    }
`;

export const Footers = styled.footer`
    background-color: #111;
    text-align: center;
    
    p, span{
        margin: 0;
        padding: 0;
        display: inline-block;
        color: #fff;
    }

    span{
        color: #fff;
    }
`;