import styled from "styled-components";

export const Container = styled.div`
  height: 700px;

  .profile-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: #000000;
  }

  .time {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #adafbb;
  }

  .msg {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #000000;
  }

  .profile-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
    background: rgba(0, 0, 0, 0.05);
  }

  .call-container {
    height: 24px;
    width: 24px;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  .call-container img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .msg-time {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 3px;
  }
`;

export const Inner = styled.div`
  width: 49%;
  background: #f3f3f3;
  border-radius: 15px;
  padding: 13px;
  height: 715px;

  .profile-img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
    background: rgba(0, 0, 0, 0.05);
  }

  .call-container {
    height: 24px;
    width: 24px;

    &:not(:last-child) {
      margin-right: 20px;
    }
  }

  .call-container img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  .msg-time {
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.4);
    margin-top: 3px;
  }
`;

export const InputContainer = styled.div`
  border: 1px solid #ffe5e5;
  padding: 10px;
  border-radius: 15px;
  height: 48px;
  &.input-container {
    background: #fff;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 3px;
  background: none;
  ::placeholder {
    font-size: 15px;
  }
`;

export const ChatContainer = styled.div`
  border-bottom: 2px solid #ffe5e5;
  padding: 17px 0;
  cursor: pointer;
`;

export const Header = styled.div`
  border-bottom: 2px solid #ffe5e5;
  padding: 15px 0;
`;

export const Body = styled.div`
  height: 600px;
  position: relative;
  padding: 19px 0;
  overflow-y: auto;
  .line {
    height: 1px;
    background: #e8e6ea;
  }

  .day {
    font-weight: 400;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.7);
    margin: 0 10px;
  }

  .msg-container {
    position: absolute;
    bottom: 0px;
    height: 50px;
    left: 0;
    width: 100%;
    gap: 5px;
  }
`;

export const SendInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 3px;
  background: none;
  ::placeholder {
    font-size: 15px;
  }
`;

export const SendMessage = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 15px;
  border: 1px solid #ffe5e5;
  background: #fff;

  .send {
    height: 18px;
    width: 21px;
    object-fit: contain;
  }
`;

export const VoiceNote = styled.div`
  height: 20px;
  width: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Sender = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  align-items: end;
  .sender {
    width: 50%;
    padding: 9px;
    background: #f3f3f3;
    border-radius: 15px 15px 0px 15px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #000000;
  }
`;

export const Receiver = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  .receiver {
    width: 50%;
    padding: 9px;
    border-radius: 15px 15px 15px 0px;
    background: #efe3e2;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #000000;
  }
`;
