import { UserProfile } from '@clerk/nextjs';

const Page = () => {
  return (
    <div className="md:w-4/6 flex justify-center mx-auto">
      <UserProfile />
    </div>
  );
};

export default Page;
