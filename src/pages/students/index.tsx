import PageHead from '@/components/shared/page-head';
import { useGetStudents } from './queries/queries';
import StudentsTable from './components/students-table';
import { useSearchParams } from 'react-router-dom';
import { DataTableSkeleton } from '@/components/shared/data-table-skeleton';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';

export default function StudentPage() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const pageLimit = Number(searchParams.get('limit') || 10);
  const country = searchParams.get('search') || null;
  const offset = (page - 1) * pageLimit;
  const { data, isLoading } = useGetStudents(offset, pageLimit, country);
  const users = data?.users;
  const totalUsers = data?.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);

  if (isLoading) {
    return (
      <div className="p-5">
        <DataTableSkeleton
          columnCount={10}
          filterableColumnCount={2}
          searchableColumnCount={1}
        />
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">
      <PageHead title="Student Management | App" />
      <Breadcrumbs
        items={[
          { title: 'Dashboard', link: '/' },
          { title: 'Students', link: '/students' }
        ]}
      />
      <StudentsTable
        users={users}
        page={page}
        totalUsers={totalUsers}
        pageCount={pageCount}
      />
    </div>
  );
}
