export interface PolicyArticle {
  title: string;
  content: string;
}

export interface PolicyData {
  title: string;
  effectiveDate: string;
  articles: PolicyArticle[];
}

export const privacyPolicy: Record<"ko" | "zh" | "en", PolicyData> = {
  ko: {
    title: "개인정보처리방침",
    effectiveDate: "시행일: 2023년 1월 1일",
    articles: [
      {
        title: "제1조 (개인정보의 처리 목적)",
        content: `< 스꾸버스 >('https://skkuverse.com' 이하 '스꾸버스')은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

1. 재화 또는 서비스 제공
서비스 제공, 콘텐츠 제공을 목적으로 개인정보를 처리합니다.`,
      },
      {
        title: "제2조 (개인정보의 처리 및 보유 기간)",
        content: `① < 스꾸버스 >은(는) 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.

1. <재화 또는 서비스 제공>
<재화 또는 서비스 제공>와 관련한 개인정보는 수집·이용에 관한 동의일로부터 <지체없이 파기>까지 위 이용목적을 위하여 보유·이용됩니다.

보유근거: 서비스 제공
관련법령: 표시/광고에 관한 기록 — 6개월`,
      },
      {
        title: "제3조 (처리하는 개인정보의 항목)",
        content: `① < 스꾸버스 >은(는) 다음의 개인정보 항목을 처리하고 있습니다.

1. <재화 또는 서비스 제공>
필수항목: 접속 로그, 서비스 이용 기록
선택항목: 접속 IP 정보, 쿠키, 접속 로그, 서비스 이용 기록`,
      },
      {
        title: "제4조 (개인정보의 파기절차 및 파기방법)",
        content: `① < 스꾸버스 >은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.

② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
1. 법령 근거:
2. 보존하는 개인정보 항목: 계좌정보, 거래날짜

③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.
1. 파기절차
< 스꾸버스 >은(는) 파기 사유가 발생한 개인정보를 선정하고, < 스꾸버스 >의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
2. 파기방법
전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.`,
      },
      {
        title: "제5조 (정보주체와 법정대리인의 권리·의무 및 그 행사방법)",
        content: `① 정보주체는 스꾸버스에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.

② 제1항에 따른 권리 행사는 스꾸버스에 대해 「개인정보 보호법」 시행령 제41조 제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 스꾸버스은(는) 이에 대해 지체 없이 조치하겠습니다.

③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 "개인정보 처리 방법에 관한 고시(제2020-7호)" 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.

④ 개인정보 열람 및 처리정지 요구는 「개인정보 보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한될 수 있습니다.

⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.

⑥ 스꾸버스은(는) 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.`,
      },
      {
        title: "제6조 (개인정보의 안전성 확보조치)",
        content: `< 스꾸버스 >은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.

1. 내부관리계획의 수립 및 시행
개인정보의 안전한 처리를 위하여 내부관리계획을 수립하고 시행하고 있습니다.

2. 개인정보 취급 직원의 최소화 및 교육
개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화하여 개인정보를 관리하는 대책을 시행하고 있습니다.

3. 정기적인 자체 감사 실시
개인정보 취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를 실시하고 있습니다.

4. 개인정보에 대한 접근 제한
개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여, 변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있습니다.`,
      },
      {
        title: "제7조 (개인정보를 자동으로 수집하는 장치의 설치·운영 및 그 거부에 관한 사항)",
        content: `스꾸버스은(는) 정보주체의 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용하지 않습니다.`,
      },
      {
        title: "제8조 (개인정보 보호책임자)",
        content: `① 스꾸버스은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

▶ 개인정보 보호책임자
성명: 조승용
직책: 대표
직급: 대표
연락처: zoyoong124@gmail.com
※ 개인정보 보호 담당부서로 연결됩니다.

② 정보주체께서는 스꾸버스의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 스꾸버스은(는) 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.`,
      },
      {
        title: "제9조 (개인정보의 열람청구를 접수·처리하는 부서)",
        content: `정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. < 스꾸버스 >은(는) 정보주체의 개인정보 열람청구가 신속하게 처리되도록 노력하겠습니다.

▶ 개인정보 열람청구 접수·처리 부서
연락처: zoyoong124@gmail.com`,
      },
      {
        title: "제10조 (정보주체의 권익침해에 대한 구제방법)",
        content: `정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.

1. 개인정보분쟁조정위원회: (국번없이) 1833-6972 (www.kopico.go.kr)
2. 개인정보침해신고센터: (국번없이) 118 (privacy.kisa.or.kr)
3. 대검찰청: (국번없이) 1301 (www.spo.go.kr)
4. 경찰청: (국번없이) 182 (ecrm.cyber.go.kr)

「개인정보보호법」 제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.

※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.`,
      },
      {
        title: "제11조 (개인정보 처리방침 변경)",
        content: `① 이 개인정보처리방침은 2023년 1월 1일부터 적용됩니다.`,
      },
    ],
  },
  zh: {
    title: "隐私政策",
    effectiveDate: "生效日期：2023年1月1日",
    articles: [
      {
        title: "第1条（处理个人信息的目的）",
        content: `<Skubus>（"https://skkuverse.com"以下简称"Skubus"）出于以下目的处理个人信息。处理中的个人信息不会用于以下目的以外的目的，如果使用目的发生变化，将根据个人信息保护法第18条采取另行征得同意等必要措施。

1. 提供商品或服务
我们处理个人信息的目的是提供服务和内容。`,
      },
      {
        title: "第2条（个人信息的处理和保留期限）",
        content: `① <Skubus>是指依法或向信息主体收集个人信息时同意的个人信息的保留和使用期限。

② 各个人信息的处理和保留期限如下。

1. <提供商品或服务>
与<提供商品或服务>相关的个人信息自同意收集和使用之日起保留并用于上述目的，直至<立即销毁>。

保留依据：提供服务
相关法律：有关标签/广告的记录 — 6个月`,
      },
      {
        title: "第3条（处理的个人信息项目）",
        content: `① <Skubus>正在处理以下个人信息项目。

1. <提供商品或服务>
必填项目：访问日志、服务使用记录
可选项目：访问IP信息、cookies、访问日志、服务使用记录`,
      },
      {
        title: "第4条（个人信息销毁程序和方法）",
        content: `① 超过个人信息保存期限或达到处理目的等不再需要个人信息时，<Skubus>将立即销毁个人信息。

② 信息主体同意的个人信息保存期限已过期或即使已达到处理目的，如果根据其他法律必须继续保存个人信息，则该个人信息将被转移到单独的数据库（DB）或存储在不同的存储位置。
1. 法律依据：
2. 需保存的个人信息项目：账户信息、交易日期

③ 销毁个人信息的程序和方法如下：
1. 销毁程序
<Skubus>选择发生销毁原因的个人信息，并在<Skubus>个人信息保护管理者的批准下销毁该个人信息。
2. 销毁方法
电子文件形式的信息使用不允许复制记录的技术方法。`,
      },
      {
        title: "第5条（信息主体、法定代表人的权利义务事项及行使方式）",
        content: `① 信息主体可以随时向Skubus行使查看、更正、删除或暂停处理个人信息的权利。

② 第一项的权利的行使可以根据《个人信息保护法施行令》第41条第1项的规定，通过书面、电子邮件、传真（FAX）等方式向Skubus进行，Skubus将立即采取行动。

③ 第一项规定的权利的行使可以通过信息主体的法定代表人或者授权人等代理人进行，在此情况下，须根据《个人信息处理办法公告（第2020-7号）》附表第11号提交授权书。

④ 请求阅览及停止处理个人信息，可能会限制个人信息保护法第35条第4项、第37条第2项规定的信息主体的权利。

⑤ 其他法律法规规定个人信息为收集对象的，不能请求更正、删除个人信息。

⑥ Skubus根据信息主体的权利，确认提出阅览请求、更正或删除请求、停止处理请求等请求的人是否为本人或合法代理人。`,
      },
      {
        title: "第6条（有关确保个人信息安全的措施）",
        content: `<Skubus>正在采取以下措施来确保个人信息的安全。

1. 内部管理计划的制定和实施
我们正在制定和实施安全处理个人信息的内部管理计划。

2. 个人信息处理员工的最小化和培训
我们正在实施个人信息管理措施，指定处理个人信息的员工并仅限于负责人。

3. 定期进行自我审核
为确保个人信息处理的稳定性，我们定期（每季度一次）进行自我审核。

4. 限制对个人信息的访问
正在采取必要的措施来控制对个人信息的访问，通过授予、更改和删除处理个人信息的数据库系统的访问权限，并使用入侵防御系统来防止来自外部的未经授权的访问。`,
      },
      {
        title: "第7条（有关自动收集个人信息的装置的安装、操作和拒绝）",
        content: `Skubus不使用存储和频繁检索信息主体的使用信息的"cookie"。`,
      },
      {
        title: "第8条（个人信息保护负责人）",
        content: `① Skubus负责个人信息处理的全面管理，并任命如下个人信息保护管理者，负责处理与个人信息处理相关的信息主体的投诉和损害救济。

▶ 个人信息保护官
姓名：曹承勇
职位：代表
等级：代表
联系方式：zoyoong124@gmail.com
※ 将连接至个人信息保护部门。

② 信息主体在使用Skubus服务（或业务）过程中发生的一切与个人信息保护相关的咨询、投诉处理、损害救济等，可以向个人信息保护管理者及负责部门进行询问。Skubus将立即回复并处理信息主体的询问。`,
      },
      {
        title: "第9条（受理个人信息阅览请求并处理的部门）",
        content: `信息主体可以依据个人信息保护法第35条的规定，向下列部门请求阅览个人信息。<Skubus>将尽力及时处理信息主体查看个人信息的请求。

▶ 个人信息访问请求受理及处理部门
联系方式：zoyoong124@gmail.com`,
      },
      {
        title: "第10条（信息主体权益受到侵犯时的救济方法）",
        content: `为了获得个人信息侵权的救济，信息主体可以向个人信息纠纷调解委员会、韩国互联网安全局个人信息侵权举报中心等申请纠纷解决或协商。此外，有关其他个人信息侵权行为的举报和咨询，请联系以下机构。

1. 个人信息纠纷调解委员会：（不带区号）1833-6972（www.kopico.go.kr）
2. 个人信息侵权举报中心：（无区号）118（privacy.kisa.or.kr）
3. 大检察厅：（无区号）1301（www.spo.go.kr）
4. 警察厅：（不含区号）182（ecrm.cyber.go.kr）

根据《个人信息保护法》第35条（个人信息的查看）、第36条（个人信息的更正/删除）、第37条（中止处理等）的规定，公共机构负责人的处理或不作为导致权利或利益受到侵犯的，可以按照行政申诉法的规定请求行政申诉。

※ 有关行政申诉的更多信息，请参阅中央行政申诉委员会网站（www.simpan.go.kr）。`,
      },
      {
        title: "第11条（个人信息处理政策的变更）",
        content: `① 本个人信息处理政策自2023年1月1日起施行。`,
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    effectiveDate: "Effective Date: January 1, 2023",
    articles: [
      {
        title: "Article 1 (Purpose of Processing Personal Information)",
        content: `<Skubus> ('https://skkuverse.com', hereinafter referred to as 'Skubus') processes personal information for the following purposes. The personal information being processed will not be used for purposes other than the following, and if the purpose of use changes, necessary measures will be taken, such as obtaining separate consent in accordance with Article 18 of the Personal Information Protection Act.

1. Provision of goods or services
We process personal information for the purpose of providing services and content.`,
      },
      {
        title: "Article 2 (Processing and Retention Period of Personal Information)",
        content: `① <Skubus> processes and retains personal information within the retention and use period in accordance with the law or as consented to when collecting personal information from the information subject.

② The processing and retention period for each category of personal information is as follows.

1. <Provision of goods or services>
Personal information related to <provision of goods or services> is retained and used for the above purposes from the date of consent to collection and use until <destroyed without delay>.

Basis for retention: Service provision
Related laws: Records regarding labeling/advertising — 6 months`,
      },
      {
        title: "Article 3 (Items of Personal Information Processed)",
        content: `① <Skubus> processes the following personal information items.

1. <Provision of goods or services>
Required items: Access log, service use record
Optional items: Access IP information, cookies, access log, service use record`,
      },
      {
        title: "Article 4 (Procedures and Methods of Destruction of Personal Information)",
        content: `① <Skubus> destroys the personal information without delay when it becomes unnecessary, such as when the retention period has expired or the purpose of processing has been achieved.

② When the retention period agreed to by the information subject has expired or the purpose of processing has been achieved, but personal information must continue to be preserved in accordance with other laws, the personal information will be transferred to a separate database (DB) or stored in a different location.
1. Legal basis:
2. Personal information items to be preserved: Account information, transaction date

③ The procedures and methods for destroying personal information are as follows:
1. Destruction Procedure
<Skubus> selects the personal information for which a reason for destruction has occurred and destroys it with the approval of the personal information protection manager.
2. Destruction Method
Information in electronic file format uses technical methods that prevent the records from being reproduced.`,
      },
      {
        title: "Article 5 (Rights and Obligations of Information Subjects and Legal Representatives)",
        content: `① Information subjects may exercise their rights to view, correct, delete, or suspend processing of personal information at any time.

② The exercise of rights under Paragraph 1 may be done in writing, e-mail, facsimile (FAX), etc. in accordance with Article 41(1) of the Enforcement Decree of the Personal Information Protection Act, and Skubus will take action without delay.

③ The exercise of rights under Paragraph 1 may be done through an agent, such as the information subject's legal representative or an authorized person. In this case, a power of attorney must be submitted in accordance with Attached Form No. 11 of the "Notice on Personal Information Processing Methods (No. 2020-7)".

④ Requests to view and suspend processing of personal information may be limited pursuant to Article 35(4) and Article 37(2) of the Personal Information Protection Act.

⑤ Requests for correction and deletion of personal information cannot be made if the personal information is specified as a collection target in other laws.

⑥ Skubus verifies whether the person making the request is the individual themselves or a legitimate agent.`,
      },
      {
        title: "Article 6 (Measures to Ensure Safety of Personal Information)",
        content: `<Skubus> takes the following measures to ensure the safety of personal information.

1. Establishment and implementation of an internal management plan
We establish and implement an internal management plan for the safe processing of personal information.

2. Minimization and training of employees handling personal information
We designate employees who handle personal information and limit access to minimize risk.

3. Regular self-audits
We conduct self-audits on a regular basis (once per quarter) to ensure stability in handling personal information.

4. Restricting access to personal information
We take necessary measures to control access to personal information through granting, changing, and deleting access rights to database systems, and use intrusion prevention systems to prevent unauthorized external access.`,
      },
      {
        title: "Article 7 (Installation, Operation and Refusal of Automatic Personal Information Collection Devices)",
        content: `Skubus does not use 'cookies' that store and frequently retrieve the information subject's usage information.`,
      },
      {
        title: "Article 8 (Personal Information Protection Officer)",
        content: `① Skubus is responsible for the overall management of personal information processing and appoints the following personal information protection officer to handle complaints and provide relief for damages related to personal information processing.

▶ Personal Information Protection Officer
Name: Seungyong Cho
Position: Representative
Rank: Representative
Contact: zoyoong124@gmail.com
※ You will be connected to the personal information protection department.

② Information subjects may inquire about all personal information protection-related matters, including complaints and damage relief, that arise while using Skubus' services. Skubus will respond to and process inquiries without delay.`,
      },
      {
        title: "Article 9 (Department for Receiving and Processing Requests to View Personal Information)",
        content: `Information subjects may request to view personal information pursuant to Article 35 of the Personal Information Protection Act. <Skubus> will endeavor to promptly process requests to view personal information.

▶ Personal Information Access Request Department
Contact: zoyoong124@gmail.com`,
      },
      {
        title: "Article 10 (Methods of Relief for Violations of Rights)",
        content: `Information subjects may apply for dispute resolution or consultation with the Personal Information Dispute Mediation Committee, Korea Internet & Security Agency Personal Information Infringement Reporting Center, etc. to receive relief from personal information infringements. For reporting and consultation regarding other personal information infringements, please contact the organizations below.

1. Personal Information Dispute Mediation Committee: (without area code) 1833-6972 (www.kopico.go.kr)
2. Personal Information Infringement Reporting Center: (without area code) 118 (privacy.kisa.or.kr)
3. Supreme Prosecutors' Office: (without area code) 1301 (www.spo.go.kr)
4. National Police Agency: (without area code) 182 (ecrm.cyber.go.kr)

A person whose rights or interests have been infringed upon by a disposition or omission by the head of a public institution in response to a request under Articles 35, 36, and 37 of the Personal Information Protection Act may request an administrative appeal.

※ For more information on administrative appeals, please refer to the Central Administrative Appeals Commission website (www.simpan.go.kr).`,
      },
      {
        title: "Article 11 (Changes to Privacy Policy)",
        content: `① This privacy policy is effective from January 1, 2023.`,
      },
    ],
  },
};
