import { useSearchParams } from 'react-router-dom';
import { useGetStudents } from '../queries/queries';
import { useState } from 'react';
import PaginationSection from '@/components/shared/pagination-section';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

const InterestChannel = ({ title }: { title: string }) => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const [currentPage, setCurrentPage] = useState(page);
  const pageLimit = 6;
  const country = searchParams.get('search') || null;
  const offset = (currentPage - 1) * pageLimit;
  const { data } = useGetStudents(offset, pageLimit, country);
  const users = data?.users;
  console.log('users', users);
  const totalUsers = data?.total_users; //1000

  return (
    <div className="flex w-full flex-col rounded-t-3xl bg-background shadow-xl xl:m-7 ">
      <div className="rounded-t-3xl bg-primary">
        <h1 className="flex justify-center p-5 text-xl font-extrabold">
          {title}
        </h1>
      </div>
      {/* Mapping through repeatItems array to render the content 7 times */}
      {users?.map((item: any, index: number) => (
        <div key={index} className="my-5 ml-7 flex flex-row">
          <GitHubLogoIcon />
          <p className="ml-7">{item.city}</p>
        </div>
      ))}

      {/* pagination  */}
      <PaginationSection
        totalPosts={totalUsers}
        postsPerPage={pageLimit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default InterestChannel;
