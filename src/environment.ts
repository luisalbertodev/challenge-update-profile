const dev = {

};

const prod = {

};

const config = {
  ...(process.env.REACT_APP_STAGE === 'dev' ? dev : prod)
};

export default config;
