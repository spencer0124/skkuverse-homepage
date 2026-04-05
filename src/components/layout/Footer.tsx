export default function Footer() {
  return (
    <footer className="bg-grey-100 py-16">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-t4 font-bold text-grey-900 mb-3">스꾸버스</h3>
            <p className="text-t6 text-grey-500 leading-relaxed">
              성균관대 캠퍼스 생활을
              <br />
              하나의 앱으로 시작하세요.
            </p>
          </div>
          <div>
            <h4 className="text-t6 font-bold text-grey-800 mb-4">서비스</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-t6 text-grey-500 hover:text-grey-700 transition-colors">
                  시간표
                </a>
              </li>
              <li>
                <a href="#" className="text-t6 text-grey-500 hover:text-grey-700 transition-colors">
                  학식 메뉴
                </a>
              </li>
              <li>
                <a href="#" className="text-t6 text-grey-500 hover:text-grey-700 transition-colors">
                  셔틀버스
                </a>
              </li>
              <li>
                <a href="#" className="text-t6 text-grey-500 hover:text-grey-700 transition-colors">
                  커뮤니티
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-t6 font-bold text-grey-800 mb-4">문의</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-t6 text-grey-500 hover:text-grey-700 transition-colors">
                  인스타그램
                </a>
              </li>
              <li>
                <a href="#" className="text-t6 text-grey-500 hover:text-grey-700 transition-colors">
                  이메일
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-grey-200">
          <p className="text-t7 text-grey-400">
            &copy; 2025 스꾸버스. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
