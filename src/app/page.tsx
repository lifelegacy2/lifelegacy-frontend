import BotIcon from '@/assets/bot.svg';
import ChatBox from '@/components/ChatBox';
import ChipButton from '@/components/ChipButton';
import Header from '@/components/layouts/Header';
import Layout from '@/components/layouts/Layout';
import { rem } from '@/utils/pxto';

import * as styles from './page.css';

export default function Home() {
  return (
    <Layout>
      <Header title="자기소개" />
      <div className={styles.chatContainer}>
        <BotIcon width={36} height={36} />
        <ChatBox style={{ marginTop: rem(8) }}>
          안녕하세요 AI 작가, 새싹입니다! 이름, 나이, 성별, 직업, 결혼유무,
          자녀유무 등을 포함한 간단한 자기소개를 부탁드려요
        </ChatBox>
        <ChipButton style={{ marginTop: rem(16) }}>다시 들려줘</ChipButton>
      </div>
    </Layout>
  );
}
