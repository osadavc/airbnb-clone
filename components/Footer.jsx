const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-32 py-14 max-w-7xl mx-auto">
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How airbnb works</p>
          <p>Newsroom</p>
          <p>Inverstors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessibility</p>
          <p>This is not a real site</p>
          <p>It is a pretty awesome clone</p>
          <p>Referrals accepted</p>
          <p>Osada</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>How airbnb works</p>
          <p>Newsroom</p>
          <p>Inverstors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>

        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p>Help Centre</p>
          <p>Trust & Safety</p>
          <p>Say Hi</p>
          <p>Easter Eggs</p>
          <p>For the win</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
