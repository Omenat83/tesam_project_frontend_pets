import styled from 'styled-components';


export const NItem = styled.li`

    position: relative;
    height: 578px;
    background-color: #ffffff;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
    transition: var(--timing);

    &:hover,
    &:focus {
        transform: scale(1.05);
    };

    @media screen and (min-width: 768px) {
   
        height: 556px;
        flex-basis: calc((100% - 32px) / 2);};


        @media screen and (min-width: 1280px) {
   
        height: 534px;
        flex-basis: calc((100% - 62px) / 3);
    }


   

:hover:before {
    animation-name: move;
    animation-duration: 600ms;
    animation-timing-function: ease-in-out;
    animation-iteration-count: 2;
    animation-direction: alternate;
}

::before {
    position: absolute;
    content: '';
    top: -20px;
    display: block;
    height: 8px;
    width: 100%;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    opacity: 1;

    @media screen and (min-width: 768px) {
      
        top: -22px;
    }
}

@keyframes move {
    0% {
        opacity: 1;
        transform: translate(0%, 0%);
    }
    100% {
        opacity: 0;
        transform: translate(0%, -40%);
    }
}
`;
    
export const NContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 12px;
    height: 310px;
    @media screen and (min-width: 768px) {
    
       
        height: 266px;
    }

`;
export const NImgWrapper = styled.div`


    height: 252px;
    width: 100%;
    margin-bottom: 16px;
    position: relative;
`;
export const NImg = styled.img`


    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;

    @media screen and (min-width: 1280px) {
    
        border-radius: 0px;
  
};
`;
export const NTitle = styled.h2`


    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* start showing ellipsis when 2rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    letter-spacing: -0.01em;
    color: #111111;
`;
export const NText = styled.p`


    margin-top: 16px;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #111111;
`;
export const NflexContainer = styled.div`


    display: flex;
    justify-content: space-between;
`;
export const NDate = styled.span`


    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #888888;
`
export const NUrl = styled.a`


    text-decoration: none;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-align: right;
    color: var(--main-acc);
    transition: var(--timing);

    &:hover,
    &:focus {
        color: var(--header-acc);
    }
`



@media screen and (min-width: 1280px) {
    .item {
        height: 534px;
        flex-basis: calc((100% - 62px) / 3);
    }

    .img {
        border-radius: 0px;
    }
    .content {
        height: 266px;
    }
}