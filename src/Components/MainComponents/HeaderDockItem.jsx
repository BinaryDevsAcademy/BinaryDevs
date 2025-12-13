import { Archive, Home } from 'lucide-react';
import Dock from '../../ReactBits/DockItem/DockItem';
import React from 'react';

function HeaderDockItem() {
  const items = [
    { icon: <Home size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <Archive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <Archive size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <Archive size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <div className="block lg:hidden fixed bottom-[0] left-0 right-[0] flex justify-center z-[999]">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

export default HeaderDockItem;
