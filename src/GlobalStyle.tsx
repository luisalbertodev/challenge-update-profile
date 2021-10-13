import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
h1,h2,h3,h4,h5,h6,
span,small,strong,i,button,
label,caption,input,select,div,section,
html,body{
   font-family: 'DM Sans', sans-serif;
}

.d-flex{
   display:flex;
}

   ul,li{
      list-style:none;
   }

   .d-none {
      display: none; 
   }

   .img-fluid{
      width: 100%;
      height: auto;
   }

   .min-h-100-vh {
      min-height: 100vh;
   }

   .h-100-vh {
      height: 100vh;
   }

   .h-100 {
      height: 100%;
   }

   .w-100 {
      width: 100%;
   }

   .p0{
      padding: 0px;
   }

   .overflow-hidden {
      overflow:hidden;
   }

   .mt1{
      margin-top: .5em;
   }

   .mt2 {
      margin-top: 1em;
   }

   .mt3 {
      margin-top: 1.5em;
   }

   .mt4 {
      margin-top: 2em;
   }

   .mb1{
      margin-bottom: .5em;
   }

   .mb2 {
      margin-bottom: 1em;
   }

   .mb3 {
      margin-bottom: 1.5em;
   }

   .mb4 {
      margin-bottom: 2em;
   }

   .pt2 {
      padding-top: 1em;
   }

   .pt3 {
      padding-top: 1.5em;
   }

   .pt4 {
      padding-top: 2em;
   }

   .pt5 {
      padding-top: 2.5em;
   }

   .pt6 {
      padding-top: 3em;
   }

   .pt7 {
      padding-top: 3.5em;
   }

   .pt8 {
      padding-top: 4em;
   }

   .pb1{
      padding-bottom: .5em;
   }

   .pb2 {
      padding-bottom: 1em;
   }

   .pb3 {
      padding-bottom: 1.5em;
   }

   .pb4 {
      padding-bottom: 2em;
   }

   .pb5 {
      padding-bottom: 2.5em;
   }

   .pb6 {
      padding-bottom: 3em;
   }

   .pb7 {
      padding-bottom: 3.5em;
   }

   .pb8 {
      padding-bottom: 4em;
   }
`;

export default globalStyle;
