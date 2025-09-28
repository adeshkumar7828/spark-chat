function LogoutPage() {
  return (
    <div className="h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md shadow-xl bg-white dark:bg-gray-900 p-8 rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-center gap-4">
          <button className="btn btn-outline">Cancel</button>
          <button className="btn btn-error">Logout</button>
        </div>
      </div>
    </div>
  );
}
export default LogoutPage;
