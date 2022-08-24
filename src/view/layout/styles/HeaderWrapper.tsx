import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 61px;

  @media (max-width: 576px) {
    .sticky-top {
      padding: 0 1rem;
    }
  }

  .sticky-top  {
    height: 61px;
    box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
    z-index: 100;
}

  @media (max-width: 576px) {
    .i18n-select {
      display: none;
    }
  }

  .dropdown {
    display: inline-block;
  }

  .user-dropdown {
    padding: 0.45rem;
    margin-left: 0.5rem;
    cursor: pointer;
    display: inline-block;
    transition: all 0.3s;
    height: 100%;
    > i {
      vertical-align: middle;
      color: @text-color;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
    :global(&.dropdown-menu-show) {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .user-dropdown-content {
    display: flex;
    line-height: 18px;
    align-items: center;
  }

  .dropdown-menu.show {
    display: block;
    margin-top: 1px;
}

  .user-dropdown-avatar {
    vertical-align: top;
    border-radius: 50%;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;
  }

  .user-dropdown-avatar:hover {
      border-radius: 50%;
      box-shadow: 0 0 0 0.1rem rgb(104 125 253 / 50%) !important;
}

.user-dropdown-avatar:focus, .user-dropdown-avatar:active {
  border-radius: 50% !important;
  box-shadow: 0 0 0 0.3rem rgba(104,125,253,.25);
}

.user-dropdown-avatar:active{
border-radius: 50% !important;
box-shadow: 0 0 0 0.3rem rgb(104 125 253 / 25%) !important;
}

  .user-dropdown-text {
    flex-direction: column;
    display: none !important;
  }

  .user-dropdown-text-tenant {
    font-weight: 500;
    font-size: 12px;
  }

  .user-dropdown-text-superadmin {
    font-weight: 500;
    font-size: 12px;
    color: red;
  }

  .header-right {
    display: flex;
  }

  @media (max-width: 576px) {
    .user-dropdown-text {
      display: none;
    }
  }

  .user-dropdown:hover {
    background: rgb(0 0 0 / 0%) !important;
  }

  .menu-toggle-button {
    display: block;
    border: none;
    background-color: transparent;
    font-size: 20px;
    transition: color 0.3s;
    color: var(--algocloud-headings-color);

    &:hover {
      color: var(--primary-color);
    }
  }
`;

export default HeaderWrapper;
