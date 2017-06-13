window.fbAsyncInit=()=>{
  FB.init({
    appId      : '1380096168739166',
    xfbml      :  true,
    cookie     :  true,
    version    : 'v2.9'
  });


FB.getLoginStatus((response) => {
    loginHandler(response);
  });
};



function loginHandler(response){
  if(response.status === 'connected'){
    state.status="conectado";
    FB.api('/me?fields=email,name',user =>{
      state.user=user;
      state.doRender();
    });
  }else if(response.status==='not_authorized'){
    state.user=null;
    state.status="Aplicación no autorizada";
    state.doRender();
  }
}

function doLogin(){
  FB.login(loginHandler,{scope:'email'});
}
