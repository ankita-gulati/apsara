import { Input as AntdInput } from "antd";
import styled from "styled-components";

const Input = styled(AntdInput)`
    && {
        color: ${({ theme }) => theme?.input?.text};
        background-color: ${({ theme }) => theme?.input?.bg};
        border: 1px solid ${({ theme }) => theme?.input?.border};

        :hover {
            border-color: ${({ theme }) => theme?.input?.hover};
        }

        &:focus,
        &.ant-input-affix-wrapper-focused {
            border-color: ${({ theme }) => theme?.input?.hover};
            box-shadow: none;
        }

        &[disabled] {
            color: ${({ theme }) => theme?.input?.placeholder};
            background-color: ${({ theme }) => theme?.input?.disabled};
            border-color: ${({ theme }) => theme?.input?.border};

            :hover {
                border-color: ${({ theme }) => theme?.input?.border};
            }
        }
    }

    &::placeholder,
    .ant-input::placeholder {
        color: ${({ theme }) => theme?.input?.placeholder};
        font-style: italic;
    }
`;

export default Input;
