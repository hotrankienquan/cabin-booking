import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"wjccacooxkxticjzcqie.supabase.co",
        port:"",
        pathname:"/storage/v1/object/public/cabin-bucket/**"
      }
    ]
  }
  // output:"export"
};

export default nextConfig;
