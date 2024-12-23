import Box from "../../ui/Box";

const Avatar = ({ src, alt }) => (
  <div className="w-32 h-40 ml-auto mr-auto rounded-full overflow-hidden">
    <img src={src} alt={alt} className="w-auto h-auto object-cover" />
  </div>
);

function DescriptionMe() {
  const text = `
    我之前是焊接技師，現正轉職成為前端工程師。我一直以來對技術和創造力充滿熱情，這段旅程讓我找到了真正的職業目標。<br />
    初探程式設計的旅程: 在我國中的時候，對遊戲的熱愛促使我嘗試用 RPG Maker
    製作自己的人生第一款遊戲。雖然這與真正的程式設計關聯不大，但仍需要輸入許多參數來設定遊戲內容，這是我第一次接觸到開發過程，也成功激發了我對技術的興趣。<br />
    焊接工作中的專注、溝通與問題解決能力:
    畢業後，我投身於航太製造業。焊接是一項非常需要專注力和邏輯的技能。在這段期間，我不僅考取了國家證照，還因應公司需求取得了國際證照。這些經驗教會了我如何專注於細節和解決複雜問題，並且強化了
    我的溝通能力。<br />
    在工作的過程中，我經常需要針對無法按預期執行的工件想出修改辦法，這讓我發現了自己在解決問題和創新方面的能力。與此同時，我也需要與同事和上級保持密切的溝通，確保每個步驟都能順利進行。在這段時間裡，我學會了如何有效地傳達自己的想法和聆聽他人的意見，這對於團隊協作非常重要。<br />
    對新知識的追求:
    隨著公司政策變動，工作量減少，我被調到一個較為單調的部門。這段期間，我發現自己對新知識的渴望超過了日常的工作內容。正是在這個時候，我遇到了一位合作的工程師，從他那裡學到了
    C++，並且開始深入探討程式設計。這些學習經驗點燃了我對技術的熱情，讓我決定轉職到前端開發領域。<br />
    技術技能與專長: 在學習前端開發的過程中，我掌握了以下技術： JavaScript
    ：能夠撰寫有效且可維護的代碼。 React：具備使用 React 框架開發的經驗。
    React Router：掌握 React Router，用於路由管理和單頁應用程序 (SPA)
    的導航。 React Query：運用 React Query
    進行數據抓取和狀態管理，提高應用性能和開發效率。 Redux：掌握 Redux
    狀態管理，能夠有效管理和維護應用的全局狀態。 Supabase：專注於使用
    Supabase 作為後端服務，包括資料庫管理、用戶認證和實時數據同步等功能。
  `;

  return (
    <Box>
      <Avatar src="/selfie.jpg" alt="selfie.jpg" />
      <div className="flex flex-col items-center py-4">
        <p
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{ __html: text }}
        ></p>
      </div>
    </Box>
  );
}

export default DescriptionMe;
