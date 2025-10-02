import { useGetAllUsersQuery } from "../services/injected/authApi";

function SidebarSearchResults({ debouncedSearchTerm }) {
  const { data, isLoading } = useGetAllUsersQuery(debouncedSearchTerm, {
    skip: !debouncedSearchTerm,
  });

  return (
    <div className="absolute left-0 right-0 mt-1 bg-white dark:bg-gray-900 shadow-lg rounded-xl border z-50 w-full">
      <ul className="menu menu-sm w-full">
        {isLoading && (
          <li>
            <a className="flex items-center gap-3 p-3 w-full hover:bg-base-200 rounded-lg">
              <span className="flex-1">Loading....</span>
            </a>
          </li>
        )}

        {data && data.length > 0 ? (
          data.map((el) => (
            <li>
              <a className="flex items-center gap-3 p-3 w-full hover:bg-base-200 rounded-lg">
                <div className="avatar">
                  <div className="w-8 h-8 rounded-full bg-neutral text-neutral-content flex items-center justify-center">
                    R
                  </div>
                </div>
                <span className="flex-1">{el.userName}</span>
              </a>
            </li>
          ))
        ) : (
          <li>
            <a className="flex items-center gap-3 p-3 w-full hover:bg-base-200 rounded-lg">
              <span className="flex-1">No users found.</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default SidebarSearchResults;
