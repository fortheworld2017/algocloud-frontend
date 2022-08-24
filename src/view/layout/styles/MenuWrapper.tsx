import styled from 'styled-components';

const MenuWrapper = styled.div`
  .menu-nav {
    inset: 0% auto 0% 0%;
    overflow: auto;
    width: 200px;
    margin-top: 61px; 
    height: 100%;
    flex-direction: column;
    background-color: transparent;
  }


  .last-updated {
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a0a0a;
  }

  .last-updated:before {
    content: '●';
    width: 5px;
    height: 5px;
    height: 20px;
    color: green;
    margin-right: 10px;
  }

  @media (min-width: 576px){
    .menu-nav {
      position: relative !important;
    
    }
    .body{
      position:relative !important;
    }
    .hamburger__content__header {
      display: none;
    }
    .algocloud-fixed{
      width: 200px;
    }

      .last-updated {
        width: 200px;
        background-color: #0a0a0a;
      }
    }

    @media (max-width: 575px){
      .menu-nav {
        min-width: 100%;
        width: 100%;
        height: 100%;
        display: none;
        position: absolute;
        background-color: rgb(10 10 10 / 50%) !important;
        z-index: 10000000 !important;
        margin-top: 0px !important;
      }
      .algocloud-fixed {
        background: var(--algocloud-hover-bg-black);
        max-width: 300px;
        z-index: 1000000 !important;
        position: relative;
        height: 100%;
        overflow: scroll;
        overflow-y: auto;
        box-shadow: var(--algocloud-card-span-img-hover-box-shadow);
      max-width: 300px;
      z-index: 1000000 !important;
      position: relative;
      height: 100%;
      overflow: scroll;
      overflow-y: auto;
  }

    .hamburger__content__header {
      min-height: var(--header-height);
      display: flex;
      align-items: center;
      padding: 0 var(--su-2) 0 var(--su-4);
      justify-content: space-between;
      height: 61px;
      padding: 0 0.5rem 0 1rem;
      1px solid var(--base-a10);
  }
      .menu-nav {
        z-index: 100000;
    }
    .last-updated {
      width: 300px;
      background-color: #000000;
    }
    }
  .css-ksc7ic:hover {
    background-color: --algocloud-menu-li-hover;
    color: rgba(255, 255, 255, 0.89);
}

a:hover {
    color: #122ee2;
}
a, a:hover {
    text-decoration: none;
}

a.algocloud-navbar-brand {
  opacity: 100%;
  color: #fff!important;
  font-weight: 500!important;
  font-size: 1.4rem!important;
  left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.menu-li.active a {
  border-radius: 6px;
  background-color: var(--algocloud-menu-li-bg-active);
  color: var(--li-active);
}



.dSLQxa .menu-li a:focus, .dSLQxa .menu-li a:hover {
    -webkit-text-decoration: none;
    text-decoration: none;
}

.dSLQxa .menu-li a, .dSLQxa .menu-li .menu-li-locked {
    display: block;
    width: 100%;
    line-height: 40px;
    height: 40px;
    padding: 0 16px;
    padding-left: 24px;
    font-size: 14px;
    line-height: 40px;
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
}


.menu-nav {
  inset: 0% auto 0% 0%;
  overflow: auto;
  width: 200px;
  height: 100%;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: transparent;
}

  .menu-logo {
    padding: 8px;
    width: 100%;
    text-align: center;
    height: 61px;
    font-weight: 500;
    font-size: 1.5em;
  }

  .algocloud-font {
    text-transform: lowercase;
}

  .menu-logo a {
    text-decoration: none;
  }

  .menu-ul {
    font-size: 13px;
    font-variant: tabular-nums;
    line-height: 1.5;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    line-height: 0;
    transition: background 0.3s, width 0.2s;
    zoom: 1;
    padding-left: 8px;
    padding-right: 8px;
    padding: .5rem;
    padding-bottom: 40px;
  }

  .menu-li.active i {
    color: var(--algocloud-primary);
  }

  a.algocloud-navbar-brand {
    opacity: 100%;
    color: var(--algocloud-brand-color) !important;
    font-weight: 500!important;
    font-size: 1.4rem!important;
    margin-left: 23px;
    min-height: 68px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-start;
}



  .menu-li a,
  .menu-li .menu-li-locked {
    display: block;
    width: 100%;
    line-height: 40px;
    height: 40px;
    padding: 0 16px;
    color: var(--algocloud-body-color);
    font-weight: 400;
    border-radius: 6px;
    line-height: 40px;
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .menu-li a .menu-icon,
  .menu-li > .menu-li-locked .menu-icon {
    margin-right: 10px;
  }

  .menu-li .menu-li-locked {
    cursor: default;
  }
`;

export default MenuWrapper;
