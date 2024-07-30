/** @type {import('next').NextConfig} */
import withVideos from 'next-videos'

const nextConfig = {
	experimental: {
		scrollRestoration: true
	}
};

export default withVideos(nextConfig);
