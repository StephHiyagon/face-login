'use strict';

const Header = ()=>{
  const header=$('<header></header>');
  const img=$('<img src="img/logo.png" alt="logo-Laboratoria"/>');

  header.append(img);
  return header;
}
