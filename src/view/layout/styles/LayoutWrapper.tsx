import styled from 'styled-components';

const LayoutWrapper = styled.div`
  color: var(--algocloud-body-color);
  display: flex;
  font-size: 13px;

  button {
    font-size: 13px;
  }

  .btn {
    font-size: 13px;
  }

  h1 {
    font-size: 1.75em;
    color: var(--algocloud-body-color);
  }

  .bg-primary-light {
    background-color: #e6f7ff;
  }

  .primary-light {
    color: #e6f7ff;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--algocloud-headings-color);
  }

  body {
    background: rgb(29,78,118);
    background: linear-gradient(311deg, rgba(29,78,118,1) 0%, rgba(33,46,88,1) 100%);
    
  }

  .content {
    padding: 24px;
  }

  .form-group {
    margin-bottom: 0;
  }

  .form-control {
    font-size: inherit;
    cursor: pointer;
  }

  .form-control:hover {
    border-color: var(--algocloud-input-focus-border-color);
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: auto;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;

export default LayoutWrapper;
