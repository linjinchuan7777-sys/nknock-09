import React, { useState } from 'react';

const Navbar = ({
  settings = {},
  currentView,
  onTabChange,
  onSearch,
  onLogoClick,
  onLogout,
  isLoggedIn
}) => {
  const [searchType, setSearchType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchType, searchQuery);
    }
  };

  const menuItems = [
    { key: 'all', label: '首頁' },
    { key: '書櫃', label: '書櫃' },
    { key: 'DVD架', label: 'DVD架' },
    { key: '衣櫃', label: '衣櫃' },
    { key: '書桌', label: '書桌' },
    { key: '外出', label: '外出' },
    { key: '消息', label: '消息' }
  ];

  // Helper to map currentView string to active category tab
  const getActiveTab = () => {
    if (currentView === 'home-view') return 'all';
    if (['notes-view', 'bookshelf-view', 'todo-view'].includes(currentView)) return '書櫃';
    if (currentView === 'dvd-rack-view') return 'DVD架';
    if (currentView === 'wardrobe-view') return '衣櫃';
    if (currentView === 'desk-view' || ['pet', 'handcraft', 'food'].includes(currentView)) return '書桌'; // Fallback
    if (['map-view', 'visit-view', 'calendar-view'].includes(currentView)) return '外出';
    if (['topic', 'emotion', 'dream'].includes(currentView)) return '消息';
    return 'all';
  };

  const activeTab = getActiveTab();

  const handleCategoryNav = (parent, sub) => {
    if (onTabChange) {
      onTabChange(parent, sub);
    }
  };

  return (
    <header>
      {/* 藍色頂部小條 */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-links">
            <a href="#" className="top-bar-link" onClick={() => alert('已加入最愛！')}>加入收藏</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <a href="#" className="top-bar-link" onClick={() => alert('已設為首頁！')}>設為首頁</a>
            <span style={{ opacity: 0.3 }}>|</span>
            <span className="top-bar-link"><i className="fa-regular fa-envelope"></i> 投稿: renata@home.com</span>
            {isLoggedIn && (
              <>
                <span style={{ opacity: 0.3 }}>|</span>
                <a href="#" className="top-bar-link" id="top-logout-btn" onClick={(e) => { e.preventDefault(); onLogout(); }}>
                  <i className="fa-solid fa-right-from-bracket"></i> 登出
                </a>
              </>
            )}
          </div>
          
          {/* 搜尋欄 */}
          <form className="search-container" onSubmit={handleSearchSubmit}>
            <select 
              className="search-select" 
              id="search-type"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="all">全站資訊</option>
              <option value="書櫃">書櫃</option>
              <option value="DVD架">DVD架</option>
              <option value="衣櫃">衣櫃</option>
              <option value="書桌">書桌</option>
              <option value="外出">外出</option>
              <option value="消息">消息</option>
            </select>
            <input 
              type="text" 
              className="search-input" 
              id="search-input" 
              placeholder="請輸入關鍵字..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-btn" id="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
      </div>

      {/* 中間 Logo 與 分類導覽網格 */}
      <div className="logo-nav-section">
        <a href="#" className="logo" id="logo-btn" onClick={(e) => { e.preventDefault(); onLogoClick(); }}>
          <div className="logo-icon">
            <svg viewBox="0 0 100 100" width="36" height="36" style={{ display: 'block' }}>
              <g fill="#f1c40f">
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(30, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(60, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(90, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(120, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(150, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(180, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(210, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(240, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(270, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(300, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(330, 50, 50)" />
              </g>
              <g fill="#e67e22" transform="scale(0.8) translate(12.5, 12.5)">
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(15, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(45, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(75, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(105, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(135, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(165, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(195, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(225, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(255, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(285, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(315, 50, 50)" />
                <path d="M50,10 Q45,25 50,40 Q55,25 50,10 Z" transform="rotate(345, 50, 50)" />
              </g>
              <circle cx="50" cy="50" r="16" fill="#5c3a21" />
              <circle cx="50" cy="50" r="12" fill="#3e2723" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-zh" id="blog-title-text">{settings.blogTitle || '雷娜塔的家'}</span>
            <span className="logo-en" id="blog-subtitle-text">{settings.blogSubtitle || "RENATA'S HOME"}</span>
          </div>
        </a>

        {/* 六大父類別與子類別選單導覽網格 */}
        <div className="category-nav-grid">
          <div className="nav-grid-item" data-category="書櫃">
            <span className="nav-grid-parent">書櫃：</span>
            <div className="nav-grid-subs">
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('書櫃', '筆記'); }}>筆記</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('書櫃', '書架'); }}>書架</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('書櫃', '待辦'); }}>待辦</a>
            </div>
          </div>
          <div className="nav-grid-item" data-category="DVD架">
            <span className="nav-grid-parent">DVD架：</span>
            <div className="nav-grid-subs">
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('DVD架', '電影'); }}>電影</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('DVD架', '遊戲'); }}>遊戲</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('DVD架', '音樂'); }}>音樂</a>
            </div>
          </div>
          <div className="nav-grid-item" data-category="衣櫃">
            <span className="nav-grid-parent">衣櫃：</span>
            <div className="nav-grid-subs">
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('衣櫃', '衣服'); }}>衣服</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('衣櫃', '鞋子'); }}>鞋子</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('衣櫃', '飾品'); }}>飾品</a>
            </div>
          </div>
          <div className="nav-grid-item" data-category="書桌">
            <span className="nav-grid-parent">書桌：</span>
            <div className="nav-grid-subs">
              <a href="#" class="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('書桌', '寵物'); }}>寵物</a>
              <a href="#" class="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('書桌', '手做'); }}>手做</a>
              <a href="#" class="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('書桌', '飲食'); }}>飲食</a>
            </div>
          </div>
          <div className="nav-grid-item" data-category="外出">
            <span className="nav-grid-parent">外出：</span>
            <div className="nav-grid-subs">
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('外出', '景點'); }}>景點</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('外出', '拜訪'); }}>拜訪</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('外出', '行程'); }}>行程</a>
            </div>
          </div>
          <div className="nav-grid-item" data-category="消息">
            <span className="nav-grid-parent">消息：</span>
            <div className="nav-grid-subs">
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('消息', '話題'); }}>話題</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('消息', '情感'); }}>情感</a>
              <a href="#" className="nav-grid-child" onClick={(e) => { e.preventDefault(); handleCategoryNav('消息', '夢境'); }}>夢境</a>
            </div>
          </div>
        </div>
      </div>

      {/* 藍色橫向導覽列 */}
      <div className="blue-nav-bar">
        <div className="blue-nav-container">
          <ul className="blue-nav-menu" id="blue-nav-menu">
            {menuItems.map(item => (
              <li 
                key={item.key} 
                className={`blue-nav-item ${activeTab === item.key ? 'active' : ''}`}
                data-tab={item.key}
              >
                <a 
                  href="#" 
                  className="blue-nav-link"
                  onClick={(e) => { e.preventDefault(); handleCategoryNav(item.key, null); }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
