import Link from 'next/link';
import Footer from 'chungguo/components/Footer';

export default function Index() {
  return (
    <article className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <section className="max-w-5xl md:max-w-3xl lg:max-w-5xl mx-auto px-8 sm:px-6 pt-24 pb-12 md:pt-24 md:pb-20">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl l lg:text-5xl sm:text-3x font-extrabold font-custom leading-tighter tracking-tight mb-4">
              <p className="text-3xl l lg:text-4xl sm:text-base mb-6">Hi there 🖖 .</p>
              <p>I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Chung Guo</span>.</p>
              <p className="block">A coder, amateur photographer.</p>
            </h1>
            <section className="hero-illustration w-0 md:w-40 lg:w-60">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 890 768"><g fill="#FFFFFF00" fillRule="evenodd"><path d="M0 0h1024v768H0z" /><path d="M525.318 94.758l-9.283 24.574-5.949 15.746c-.704 1.861-1.095 3.77-2.455 5.062-3.206 3.042-8.96 4.978-12.813 7.118l-7.744 4.302c-1.331.74-4.282 1.67-5.215 2.897-1.026 1.353-.541 3.838-.541 5.71V206.757l40-5-53.291 61.49c-4.378 5.051-9.693 9.913-12.955 15.79-6.942 12.51-13.728 25.11-20.59 37.664l-19.164 35.056 57.469-2.446c14.879-.633 30.164.32 44.5-3.898 11.818-3.476 23.635-6.95 35.453-10.427 1.572-.463 6.468-.986 7.582-2.25 1.043-1.186 1.021-5.663 1.316-7.179 5.578-28.67 12.679-60.264 28.959-84.943 11.672-17.69 27.422-33.18 41.846-48.607 5.63-6.02 11.358-11.97 16.788-18.174 1.391-1.589 3.4-3.392 4.32-5.322.594-1.247 1.424-3.623 1.055-4.73-.16-.48-3.871-2.202-4.403-2.544-3.761-2.417-7.489-4.885-11.225-7.34-10.498-6.903-20.986-13.822-31.544-20.632-8.231-5.31-16.439-10.94-25.121-15.503-8.999-4.73-18.91-8.059-28.345-11.796a3733.593 3733.593 0 00-28.65-11.209" fill="#ff6161" /><g fill="#000"><path d="M848.91 532.342c-4.578 4.314-12.915 10.104-19.505 7.471-3.31-1.322-6.137-4.225-9.152-6.097-3.542-2.2-6.872-4.4-9.875-7.333-5.991-5.852-10.527-14.4-17.603-18.982-2.378-1.54-7.02-1.87-8.67-4.329-.74-1.103-.808-2.776-.672-4.05.296-2.747 1.779-2.585-.7-4.6h3.85c.074-1.488-1.41-1.61-2.516-1.419.514-2.357 1.038-11.58-3.258-7.4-3.724 3.623-1.861 9.634-4.498 13.558-2.02 3.005-7.377.572-8.1-2.734-.325-1.485 1.31-3.804 1.506-5.26.428-3.229-1.014-6.02-3.108-8.466-4.594 3.061-1.99 9.396-4.608 13.418-2.37 3.64-7.645 1.941-11.252 1.301-4.324-.768-9.213.01-13.35-1.012-6.247-1.542-3.914-8.876-4.532-13.61-.663-5.07-5.788-12.109-4.248-17.225 1.654-5.493 11.323-6.68 15.945-8.013 10.563-3.047 25.63-3.633 33.483-12.163 6.246 6.966 11.27 14.942 17.82 21.648 7.077 7.243 14.635 13.93 21.428 21.465 7.07 7.842 14.368 15.533 21.18 23.602 2.974 3.52 5.584 7.313 8.659 10.75 2.734 3.053 5.616 5.863 1.776 9.48M534.947 396.87c3.246-1.726 3.659-.644 3.658 2.911-.934-1.707-1.861-2.164-3.658-2.91m-27.52 69.105v-6.266c3.129-.082 1.205 5.278 0 6.266m-.765 9.332c0-2.775-.075-5.417.725-8.116.42 2.941 1.222 5.487-.725 8.116m13.454 190.622c2.874.27 7.303-1.71 9.72.544 2.483 2.317 2.284 9.061 2.872 12.191.972 5.173 1.833 10.363 2.652 15.561.537 3.408 1.2 6.87-2.652 8.173-5.694 1.926-13.83-.823-19.765-1.073-11.724-.493-23.443-1.179-35.177-1.417-11.373-.23-22.772-.048-34.093 1.135-5.114.534-10.115 1.478-15.177 2.332-2.668.451-9.817 2.336-12.227.087-4.534-4.234 3.004-14.119 6.246-16.91 6.017-5.182 14.574-8.918 22.119-11.168 4.032-1.203 10.754-4.58 13.93-.803 2.437 2.897 2.34 6.764 5.832 8.96 8.09 5.085 3.357-9.504-1.7-11.3 3.396-7.946 9.867 3.273 12.55 5.968.956.96 4.062 4.121 5.41 2.531 1.01-1.19-1.006-5.454-1.38-6.614-.568-1.762-2.005-4.442-1.592-6.353.748-3.458 5.598-4.4 8.503-4.688 4.505-.446 8.924.982 13.378 1.46 6.83.731 13.713.742 20.55 1.384m-45.231-325.71c-8.893.707-17.842-.653-26.714.46-8.394 1.054-16.304 4.136-24.217 6.967 11.764-27.59 26.984-52.708 45.535-76.237 9.238-11.719 19.174-23.357 29.156-34.448 4.645-5.16 9.449-10.149 14.245-15.164 4.278-4.474 7.343-12.072 12.477-15.413 4.382-2.852 12.04-.818 16.896-.64 5.489.2 12.169.698 17.522-1.129 3.879-1.324 4.946-4.857.09-4.974-5.727-.139-11.36.458-17.162-.079-15.033-1.389-29.524-3.672-44.68-2.377-3.471.296-8.041 1.775-11.448 1.331-2.45-.32-.84.911-2.542-1.055-.652-.752-1.438-2.52-1.631-3.519-1.085-5.61 1.996-13.629 2.733-19.278.682-5.228.078-10.974 1.354-16.065 1.162-4.633 4.704-5.25 9.066-5.746 11.933-1.355 24.11-2.076 36.098-3.097 27.356-2.33 55.58-5.845 82.75-.087 9.812 2.08 21.775 5.294 30.539 10.442 2.74 1.61 5.506 3.504 4.509 6.838-1.034 3.461-6.104 7.117-8.615 9.397-18.56 16.848-36.484 34.033-49.521 55.651-16.626 27.567-26.167 57.34-31.765 88.93-1.204 6.795-2.322 10.352-9.314 12.308-7.506 2.101-14.751 3.466-22.534 4.105-17.594 1.445-35.242 1.475-52.827 2.878m5.959-182.56c-1.348 10.035-3.173 20.048-3.353 30.162-.068 3.82-.43 5.734-4.492 6.586-4.79 1.004-9.658 1.752-14.47 2.794-23.218 5.032-45.998 11.212-68.714 18.168-22.077 6.762-43.791 14.37-66.364 19.378-9.71 2.155-21.072 3.607-29.916 8.378-9.514 5.134-8.262 13.551-9.116 22.796-1.141 12.352-4.804 24.312-6.092 36.66-.616 5.9-1.177 11.834-1.084 17.771.079 5.061.804 10.657-2.598 14.916-6.825-9.124-10.06-20.6-11.405-31.783-.654-5.436-.395-10.916-.582-16.377-.151-4.397-.053-11.39-2.917-15.063-6.226-7.98-14.323 24-15.093 27.415-1.295 5.748-2.363 11.544-3.653 17.293-.572 2.548-1.306 11.811-4.72 12.734-7.075 1.914-5.522-17.967-5.634-20.994-.224-6.11-.376-12.227-.233-18.342.104-4.414.958-9.204.45-13.62-1.244-10.843-7.341.581-9.055 4.617-4.331 10.19-6.29 21.095-10.174 31.447-.646 1.722-2.164 7.52-4.57 7.627-2.675.12-2.654-5.868-2.807-7.617-.888-10.139-3.887-20.207-2.982-30.45.914-10.345 4.54-20.979 9.67-29.976 10.849-19.022 30.439-29.944 49.203-39.893 21.474-11.384 44.145-20.378 67.3-27.705 27.848-8.812 56.442-15.942 85.208-21.016 14.635-2.58 29.496-4.427 44.28-5.907 5.197-.52 10.395-.824 15.524-1.813 1.936-.374 8.92-2.15 8.389 1.814m14.959-32.475c-7.337.058-14.832-3.499-21.98-4.969-8.51-1.752-16.821-4.287-25.316-6.116-16.635-3.58-33.28-7.073-49.9-10.733-7.214-1.589-14.464-2.972-21.651-4.679-7.69-1.826-15.996-3.862-23.866-1.895-11.93 2.982-16.968 16.033-21.348 26.218-3.094 7.194-5.518 15.213-10.343 21.473-1.718 2.232-4.16 4.894-7.275 4.171-5.787-1.342-4.868-9-4.131-13.233 1.068-6.143 2.58-12.214 3.792-18.329.488-2.468 4.27-18.62-2.482-16.12-5.01 1.855-7.66 14.073-9.555 18.437a198.241 198.241 0 01-4.483 9.628c-2.11 4.22-8.13 18.316-14.795 16.498-9.538-2.602-.39-27.677 1.236-32.962.892-2.9 10.587-24.902 2.404-23.104-3.485.767-6.88 7.24-8.657 9.923-3.151 4.76-6.292 9.552-9.258 14.428-3.051 5.015-4.61 10.723-7.635 15.665-1.592 2.601-4.841 6.067-8.013 3.66-4.945-3.752-2.014-16.8-1.148-21.734 1.61-9.173 5.613-18.577 11.104-26.076 8.25-11.268 23.82-14.909 36.912-17.098 16.899-2.826 34.033-2.053 51.003-.38 19.085 1.88 37.879 3.894 56.69 7.74 18.96 3.876 37.929 7.721 56.596 12.847 8.794 2.415 17.714 4.556 26.383 7.391 9.216 3.013 18.21 6.763 27.683 8.934l-9.997 24.946c-3.19-3.155-7.542-4.567-11.97-4.53m163.323 22.912c2.922-1.598 6.15-2.352 7.216-5.884.943-3.12-.668-6.657-1.438-9.653-2.154-8.388-2.721-17.077-.815-25.564 1.822 2.781 8.642 13.478 12.79 7.002 2.502-3.906-4.202-9.525-6.16-12.27 4.295-2.65 10.428-9.763 15.376-5.474 3.198 2.773 4.552 5.443 8.86 6.791 5.232 1.637 10.157 1.262 15.499.81 3.74-.316 4.64-.815 6.102 2.065 1.147 2.264 1.74 5.066 2.41 7.497 1.32 4.793 4.377 14.237.757 18.727-3.171 3.933-15.477.561-17.186 5.638-.932 2.77 3.516 2.868 5.216 4.238 2.105 1.696 3.846 4.395 4.99 6.806.847 1.783 2.135 4.73.693 6.552-1.992 2.522-5.684.61-7.29-1.224-2.132-2.435-2.824-5.764-4.603-8.416-3.265-4.866-3.46-.995-4.35 2.5-.922 3.63-3.106 3.38-6.451 3.845-5.87.82-11.8 1.974-17.513 3.547-2.928.806-5.766 1.833-8.555 3.033-1.797.772-4.912 3.111-6.862 3.134-3.613.04-6.118-6.003-7.983-8.524 3.097-1.729 6.185-3.474 9.297-5.176M853.154 518.12c-9.024-10.832-16.84-22.6-25.742-33.527-8.781-10.777-18.94-20.2-28.795-29.96-4.651-4.608-9.107-9.662-14.241-13.744-3.83-3.046-6.777-3.093-11.384-1.744-13.09 3.834-26.42 8.45-38.807 14.17-11.535 5.328-22.042 12.17-34.552 15.14-12.77 3.033-26.046 4.007-39.133 3.255-13.424-.77-26.085-3.564-38.851-7.669-12.09-3.888-24.696-7.283-35.036-14.989-10.84-8.078-19.215-19.697-26.975-30.625-3.93-5.532-7.83-11.342-10.476-17.612-2.297-5.44-3.798-11.863-7.92-16.298-1.011 1.433-2.27 2.662-2.783 4.345-.234.765 1.144.741 1.003 1.35-.267 1.144-1.791 2.312-2.677 2.935-3.183 2.24-3.202.457-2.367 4.646.486 2.442-.434 7.951-4.416 6.151 1.466 1.755-.863 3.97-1.624 5.416-.523-.6-1.174-.81-1.952-.629 1.456 2.9.596 2.977-.815 5.28-.258.421-1.171 2.624-1.04 2.438-1.442 2.054-3.108 2.571-3.95 5.13-.69 2.1-.513 4.41-1.283 6.508l-2.793-3.86c.19 1.012.57 2.51 1.012 3.428.278.574 1.47 1.914 1.454 2.227-.065 1.17-1.525.89-1.941 1.898-.781 1.893.348 2.172-.078 4.02-.488 2.12-1.798 1.271-2.421 3.078-.118.343.802 1.693.656 2.433-.205 1.046-1.153 1.631-1.488 2.561-.852 2.366-.542 4.098-1.725 6.367-.458.88-1.125 1.466-1.448 2.466-.283.88.326 2.753-.22 3.541-2.638 3.8-2.267-2.745-2.067-4.368 1.679-13.627 7.066-27.69 11.996-40.428 2.45-6.328 4.835-12.854 7.906-18.915 1.236-2.44 2.663-4.96 4.706-6.827 2.584-2.362 6.25-3.307 8.59-5.945-.37.416 2.537-2.334 2.072-1.43.416-.808-.31-1.902-.052-2.684.32-.97.928-1.175 1.604-2.025 1.215-1.526 2.658-2.286.75-4.23 2.832-.626 4.186-1.545 4.752-4.578.413-2.219-.421-2.074 1.035-3.553 1.46-1.486 2.2-.326 3.122-2.899 1.1-3.079 1.832-7.266 2.492-10.488.576-2.813-.822-6.95 1.549-8.936 3.003-2.515 5.69-1.45 5.152-6.508-.525-4.93 1.007-7.918 2.547-12.584 3.073-9.315 4.26-19.15 6.955-28.576 5.75-20.116 15.91-38.253 26.834-55.96 10.094-16.362 24.206-30.302 37.833-43.727 3.73-3.677 7.42-7.407 10.77-11.438 2.887-3.47 4.205-8.197 6.979-11.492 1.685-2 4.822-2.857 7.175-3.918 3.924-1.77 8.6-4.079 13.029-3.72-1.76 5.932-2.334 12.865 2.86 17.314 6.3 5.397 12.012-.21 17.788-3.287 10.528-5.609 25.585-.46 34.765-8.867 2.187-2.002 2.797-5.2 5.069-7.07 1.668-1.372 4.04-1.72 5.919-2.742 5.705-3.105 8.474-8.789 6.253-15.068-2.03-5.74-5.185-7.73 1.837-10.64 5.7-2.36 7.867-5.916 5.287-12.247-2.46-6.036-6.966-6.73-11.23-10.68-4.13-3.827.614-8.28 3.708-11.152 3.99-3.705 4.753-7.044.127-10.897-4.844-4.034-11.76-3.893-17.406-1.898-6.386 2.255-10.593 6.004-13.295 12.08-2.752 6.184-9.573 4.458-15.097 2.734-5.283-1.648-6.658-5.204-10.127-9.033-3.858-4.259-11.721-.617-16.271 1.33-11.208 4.79-22.346 12.35-22.791 25.74-.265 7.985 3.112 14.772 4.868 22.267 1.606 6.854-9.405 6.314-11.312 12.944-20.341-10.768-42.994-14.063-65.732-14.796-24.167-.78-48.682-1.405-72.643 2.407 5.562-9.69 8.499-20.316 13.338-30.27 1.393-2.867 1.993-2.622 5.067-1.756 5.905 1.663 11.766 3.524 17.659 5.237 21.528 6.258 42.633 13.798 63.449 22.056 2.023.803 6.54 3.032 8.313.608 2.046-2.795-2.687-6.24-4.603-7.647-8.382-6.149-18.77-9.88-28.156-14.195-20.523-9.429-43.25-13.905-64.663-20.908C472.826 77.46 425 65.975 376.959 58.39c-11.724-1.85-23.573-2.122-35.348-3.496a132.53 132.53 0 00-31.308.068c-19.262 2.323-41.593 7.335-52.472 24.967-9.821 15.92-16.377 33.82-13.871 52.703.753 5.672 3.155 12.39 10.154 10.927 4.855-1.014 7.433-5.139 9.687-9.165 3.406-6.082 6.77-12.164 10.46-18.083 1.37 8.875-3.605 17.602-2.823 26.643.532 6.135 3.922 15.828 11.887 14.091 10.917-2.38 15.41-19.435 20.659-27.617.266 6.302-1.943 12.513-1.267 18.83.667 6.238 5.542 12.128 12.389 11.273 6.458-.806 10.655-7.725 13.398-12.934 3.817-7.249 6.559-15.02 10.287-22.318 3.494-6.84 7.633-14.983 15.975-16.268 7.445-1.148 15.977 1.51 23.33 2.605 20.4 3.04 40.388 8.216 60.564 12.398 21.633 4.483 43.777 7.206 64.743 14.44-7.372 10.034-26.664 7.866-37.646 8.943-16.596 1.628-33.405 2.853-49.907 5.255-16.298 2.372-32.255 6.583-48.426 9.64-16.086 3.041-32.144 6.087-47.71 11.273-28.898 9.63-58.28 21.815-83.741 38.616-11.847 7.818-22.371 16.753-29.69 29.093-7.364 12.417-10.903 26.458-12.253 40.741-.84 8.894.587 16.591 2.31 25.247 1.248 6.267 1.652 16.76 6.677 21.35 9.59 8.758 17.554-26.77 19.325-31.06 1.275 7.031-.81 46.647 14.579 43.425 6.868-1.437 8.426-10.864 9.565-16.542 2.078-10.35 3.939-20.91 7.493-30.879 2.28 13.432 3.232 27.426 8.146 40.255 3.264 8.52 12.577 23.638 19.07 9.052 4.87-10.939 3.199-23.494 3.783-35.108.647-12.87 4.342-25.284 5.65-38.028.507-4.937.048-10.5 5.009-13.195 4.259-2.312 10.487-3.065 15.137-4.356 13.773-3.824 27.636-7.339 41.344-11.396 13.714-4.06 27.238-8.803 40.769-13.432 12.94-4.427 26.154-6.944 39.252-10.735 7.447-2.156 14.804-4.41 22.355-6.21 3.514-.838 7.07-1.49 10.577-2.357 2.599-.642 6.023-3.065 8.695-3.022 2.75.045 3.784 2.373 6.937 2.556 3.395.196 6.847-.553 10.223-.812 8.225-.63 16.968-1.65 25.174-.51-4.932 5.85-11.593 9.893-17.431 14.74-6.733 5.588-13.25 11.623-19 18.223-11.572 13.28-22.51 27.317-32.67 41.704-10.023 14.193-18.093 29.724-25.11 45.592-3.495 7.907-6.89 15.987-9.304 24.298-.992 3.414-1.802 6.841-3.593 9.946-1.643 2.848-3.958 5.303-2.016 8.742 1.337-.837 2.538-1.877 3.747-2.882-1.397 9.841-4.412 19.361-5.962 29.172-1.528 9.666-1.466 19.607-1.367 29.37.208 20.443 1.728 40.424 5.875 60.477 4.194 20.277 9.582 40.4 16.376 59.961 6.54 18.834 13.103 38.585 22.232 56.336 9.75 18.96 21.349 38.894 35.462 54.943-9.22 3.776-20.951 3.07-30.713 4.591-10.204 1.59-19.031 4.591-27.727 10.237-8.798 5.714-13.574 13.07-14.79 23.488-.864 7.415-3.431 17.681 6.297 19.63 6.997 1.4 14.819-.9 21.83-1.47 12.264-.994 24.546-1.615 36.837-2.15a2913.207 2913.207 0 0136.784-1.387c5.768-.179 11.539-.269 17.305-.476 2.584-.092 4.15-.132 6.468.615 1.832.591 1.698 1.818 3.738.301 3.29-2.447 2.613-10.162 2.52-13.554-.14-5.235-.635-10.53-1.656-15.666-.606-3.052-7.962-22.725-2.242-23.553-6.645-7.302-9.3-17.729-12.284-26.88-3.74-11.467-7.023-22.9-9.6-34.694-5.505-25.19-7.938-50.657-7.938-76.432 25.518 15.73 52.517 24.25 82.573 25.2 29.882.944 62.71-1.51 91.086-11.45 13.14-4.605 24.91-10.65 36.176-18.796 4.038-2.919 8.364-9.53 13.664-9.418 6.325.136 13.408 2.53 19.689 3.554 12.012 1.958 27.69 3.063 37.86 10.493 5.524 4.036 9.483 9.685 14.413 14.335 3.75 3.538 8.709 5.46 12.43 8.997 4.017 3.817 2.422 8.804 9.08 9.113 5.693.263 11.934-2.027 16.843-4.715 9.794-5.363 20.224-16.81 11.172-27.674" /><path d="M759.017 263.031c14.333 10.181 30.773 17.136 45.751 26.305 3.75 2.295 15.43 7.06 15.316 11.317-.066 2.49-3.576 5.61-5.113 7.335a174.695 174.695 0 00-7.54 9.067c-11.122 14.315-21.596 28.765-33.65 42.361-1.815 2.045-7.282 11.81-9.047 6.96-.8-2.199-.14-4.67-2.226-6.72-1.073-1.056-5.22-1.638-4.012-3.903.805.362 1.611.725 2.417 1.086-.626-1.81-.58-3.793-1.518-5.504-.583-1.063-1.722-1.566-2.117-2.763-.546-1.654.38-3.576.225-5.28-.153-1.7-1.034-3.308-1.56-4.912-3.119-9.508-4.238-19.093-5.835-28.903-1.58-9.707-4.04-19.11-5.007-28.925-1.02-10.367-2.272-20.713-3.94-30.997 2.978.418 5.268 3.655 7.375 5.485 3.312 2.876 6.908 5.453 10.481 7.991m-11.236 100.367a5.682 5.682 0 01-1.605-1.979c7.025-3.48 2.786 2.457 1.605 1.98m-4.272-7.423c-3.062.844-5.262 1.015-7.623-.245-.224-.119.034-1.04-.37-1.229-.353-.164-.892.04-1.194-.115-1.028-.523-2.828.623-3.003-1.379 3.908-1.196 7.751-3.403 11.877-3.775 5.734-.516 5.47 5.321.313 6.743m-13.416-11.54c-4.178.977-7.62 3.26-12.059 2.663-4.167-.558-7.788-2.719-11.075-5.209 8.223-2.328 16.846-2.748 25.062-5 2.675-.733 6.19-2.666 9.073-1.887 3.203.866 3.405 3.866 4.365 6.596-5.126.922-10.29 1.651-15.366 2.837m-26.13-11.584c-4.015.96-8.118 3.056-11.474-.563-.542-.584-1.016 0-.952-1.8.067-1.897 1.79-3.119 3.27-3.787 3.482-1.57 8.363-.555 12.061-.786 5.9-.367 11.903-1.593 17.738-2.537 4.04-.653 8.213-2.103 12.342-1.817 3.188.221 7.034 2.938 2.388 4.92-4.23 1.806-10.575 1.53-15.159 2.311-6.776 1.156-13.528 2.461-20.215 4.06m-3.92-18.885l.78.795c-.044-.01 1.538-1.29 1.957-1.328 2.035-.177 4.082-.037 6.12-.152 4.696-.265 9.43-1.083 14.041-1.984 3.757-.734 7.584-1.999 11.451-1.682 3.348.274 3.7.96 3.92 4.191-8.547 0-17.35-.18-25.749 1.63-5.468 1.176-11.494 4.682-14.233-1.638l1.712.168m5.343-13.679c2.12 1.614 7.896-1.07 10.436-1.338 2.758-.292 5.353-.595 8.026-1.282 2.37-.61 10.211-3.656 12.03-.743 2.786 4.463-8.499 5.282-10.288 5.503-7.503.927-15.288 1.75-22.589 3.717l2.385-5.857m10.292-15.159c.548 2.063 17.516-5.539 17.825-.014.238 4.24-16.788 6.351-19.849 5.98.717-1.953 2.624-3.7 2.024-5.966m5.697-12.967c.361-4.16.92-4.137 4.256-4.529 2.545-.299 6.043-1.79 5.381 2.745-.567 3.884-10 5.983-9.637 1.784m6.065-14.317c.803-2.234 2.61.773 2.648 1.91.101 3.022-2.19 2.368-4.397 2.368.614-1.412 1.198-2.84 1.75-4.278m27.926-16.769c-.45-.542-2.976-.749-3.695-1.012-1.768-.648-1.517-2.029-3.779-.667-.113-.114.102-1.138-.02-1.185-.063-.024-1.648-.622-2.163-.952-1.243-.796-2.363-1.575-3.505-2.574-1.214-1.06-2.43-2.6-3.817-3.446-.585-.356-1.063-.86-1.768-.97-1.829-.282-1.305.992-2.904 1.245-.985.156-1.702-.994-2.99-.498-1.113.428-1.759 1.99-2.255 2.918-1.803 3.381-3.194 7.02-4.959 10.437-9.026 17.473-19.285 34.283-28.028 51.92-4.21 8.495-8.605 17.05-11.569 26.08-2.137 6.511-6.963 16.024-2.81 22.531 3.018 4.731 9.063 6.774 13.886 9.06 7.257 3.44 13.947 7.936 21.284 11.271a533.548 533.548 0 0125.773 12.578c3.637 1.894 6.92 4.622 10.544 6.416 2.217 1.097 5.641-.775 6.363 1.74 2.78-3.366 7.277-1.122 10.492-3.492 1.891-1.394 3.273-4.14 4.85-5.857 2.366-2.574 4.934-4.962 7.348-7.49 9.581-10.046 18.428-20.508 27.145-31.297 8.326-10.303 18.053-20.037 25.086-31.315 2.793-4.477 3.3-9.172 1.456-14.118-1.346-3.608-4.588-9.056-9.219-6.667 1.756-2.916-5.018-6.03-7.073-6.6-.03-.008-.436 2.232-1.009 2.176.204.02-1.722-4.963-2.568-5.602-2.512-1.9-5.568-4.119-8.309-5.684-2.514-1.435-5.167-2.146-7.602-3.752-2.952-1.946-5.662-4.254-8.625-6.187-2.86-1.866-6.05-4.072-9.212-5.355-2.742-1.113-5.204-1.33-7.67-3.155-3.053-2.257-5.715-3.788-9.235-5.343-3.045-1.345-7.265-2.52-9.443-5.154M339.709 511.32l1.678-3.944c.692 2.292.886 3.432-1.678 3.944m.745 6.074c-1.213.217-.735-3.588-.735-4.251 2.095 1.186.36 2.608.735 4.251m-1.891-10.977l3.102-1.832c-1.44 2.668-.875 1.001-.281 2.783-1.086.312-2.142-.052-2.821-.951m-6.128 20.852c-3.876 14.063-16.187 25.154-29.19 30.899-7.472 3.3-14.818 4.126-22.887 3.758-3.112-.142-6.774-1.153-9.77-.965-2.305.145-2.201.245-4.111 2.197-.845-1.556-.233-2.648-1.928-3.554-2.115-1.13-2.993.186-4.042 1.751-1.373-1.423-1.935-2.166-3.714-3.011.056.027-1.703-.04-1.631-.018-.318-.098-2.231-1.328-2.83-1.552-2.458-.922-5.3-1.301-7.568-2.624-1.984-1.155-3.618-4.398-5.888-1.906-.002-4.164-5.611-5.891-8.24-8.072-4.108-3.408-7.374-8.454-9.422-13.335-2.184-5.205-2.913-10.195-3.935-15.559-.714-3.748-5.39-9.166-2.582-12.948.669 1.586.355 3.21 1.466 4.648 1-1.927 1.55-4.083 2.002-6.192.222-1.033 1.508-4.065 1.362-4.965-.297-1.842-2.577-1.942-1.313-4.2 2.622 2.853 4.738-2.157 2.757-4.154-.978 1.103-1.337 2.356-1.788 3.722-2.578-5.204 4.557-3.528 2.996-8.226 2.604-.501 4.1-1.157 5.09-3.73 1.102-2.863.292-3.487 2.792-5.379.86-.65 3.292-1.585 3.737-2.655.86-2.067-1.33-2.68.589-4.617.648 1.137 3.174 3.388 4.557 1.246.277-.427-.886-.73-.04-1.714 1.253-1.456 2.655-2.884 4.774-2.578-1.678-4.195 9.044-4.527 11.79-5.517 2.752-.991 5.087-1.642 8.005-1.872 2.915-.23 3.06-1.084 5.528-2.839.209 2.511.813 1.959 2.598 2.402.429-.736.869-.819 1.319-.248.448.426.996.626 1.642.602.98.051 2.092-.077 3.119-.056 2.41.047 4.898-.154 7.263-.103a4.814 4.814 0 001.714-.637c.223.42.447.841.669 1.262 1.253.157 1.35 1.727 2.89.01.457 2.183 1.767 1.047 3.15 1.639 1.263.541 1.464 1.405 2.629 2.008.766.621 1.587.703 2.465.248.835.619 1.683 1.22 2.543 1.803 1.585.895 3.453 1.443 5.123 2.15 1.11.458 2.215.935 3.31 1.429.033 1.322.626 1.789 1.778 1.4 1.04.871 1.334.837 2.344 2.32 2.288 3.361 4.318 5.972 7.208 8.976 12.56 13.06 16.42 31.524 11.67 48.756m3.855-55.534c-5.671-7.594-13.698-16.29-20.911-21.086-3.656-2.432-8.788-6.797-13.26-8.083-1.06-.305-2.156-.325-3.198-.645-.805-.247-1.243-1.073-2.161-1.222-.642-.104-.713 1.333-1.395 1.201-1.426-.278-2.33-1.693-3.337-2.578-2.163 3.727-3.337-2.541-6.513 1.673-3.78-5.927-12.66-4.631-18.696-4.332-1.79.088-2.631.725-4.218 1.197-1.477.439-1.623.326-3.236.314-4.017-.031-7.583.474-11.296 2.238-6.238 2.963-11.964 7.58-17.89 11.151-6.621 3.991-12.59 9.071-17.656 14.908-18.314 21.106-23.211 51.913-8.608 76.381 23.195 38.861 83.026 43.014 116.929 16.646 26.193-20.373 36.16-60.029 15.446-87.763M623.379 362.378c-.651 1.553-6.73 1.03-6.863-.801-.198-2.736 7.994-1.898 6.863.8m6.457-1.015c3.445.28 9.105 2.62 12.425 1.206 5.067-2.158-.254-5.47-2.972-6.46-2.766-1.007-6.886-.472-8.308-3.364-1.07-2.175 1.574-8.247-1.706-7.271-3.442 1.024-2.441 9.722-7.842 6.79-2.576-1.4-1.525-9.921-5.84-5.567-1.181 1.19-1.284 3.378-2.848 4.266-1.596.907-3.598-.038-5.283.04-4.461.21-5.882 4.383-1.362 6.038 1.673.613 7.979 1.36 4.159 4.095-2.407 1.722-7.754-1.892-9.821 1.106-2.841 4.118 4.769 4.21 6.813 5.443 3.464 2.086.603 6.959.879 10.429.423 5.302 3.503 4.194 4.622-.293.949-3.807-.227-9.287 5.512-7.774 9.346 2.464-5.197 14.329 1.649 17.365 4.365 1.936 4.983-8.53 5.322-10.331 1.255-6.651 4.99-5.1 10.65-4.895 6.613.238 8.209-4.653 1.207-6.054-2.234-.447-5.307.118-7.247-1.305-1.148-.841-2.726-3.684-.01-3.464M385.71 578.656c-5.35-1.916-14.302-1.502-15.626 5.409-.554 2.893.525 5.953 2.523 8.055 2.317 2.437 6.007 2.663 5.81-1.581-.137-2.937-2.932-5.488 1.982-6.08 3.058-.368 7.58 1.919 7.733 5.297.344 7.614-12.836 8.21-17.693 6.894-9.64-2.612-7.021-12.71-.401-17.317 1.71-1.191 6.617-3.025 6.84-5.498.299-3.28-3.757-2.61-5.745-2.178-14.613 3.18-17.798 27.66-2.53 32.276 6.935 2.095 16.7-.068 20.879-6.348 3.918-5.888 3.97-16.157-3.771-18.93M191.957 405.36l-13.703 6.597c-1.51-3.231-4.061-12.058-7.891-13.185-6.2-1.825-2.252 7.797-1.182 9.997.879 1.807 2.918 4.607 2.423 6.761-.664 2.902-4.758 3.93-6.901 5.427-5.303 3.706-5.261 11.489 2.419 8.191 4.346-1.867 9.727-7.044 13.058-1.166 1.538 2.712 5.182 17.864 8.988 7.955 2.355-6.135-8.98-12.509-3.392-17.699 1.799-1.67 3.905-1.811 5.702-2.771 4.34-2.319 1.893-6.604.479-10.107M861.643 185.82c-2.723-.996-6.092-2.94-9.119-2.278-3.217.704-4.512 3.926-6.85 5.863-6.36 5.267-10.064-2.583-13.558-6.885-3.3-4.062-7.326-5.048-11.982-2.552-1.855.995-9.67 5.554-8.307 8.475.98 2.102 4.841.215 6.158-.244 2.86-.995 5.514-1.866 8.438-.415 5.485 2.72 6.908 10.18 13.544 11.342 6.862 1.203 7.087-5.327 11.984-7.785 3.283-1.647 5.57 1.27 8.737.688 3.018-.553 4.414-4.945.955-6.209M806.244 212.137c2.427.527 4.01-4.18 5.53-5.374 2.52-1.979 6.889-2.378 9.455-.386 5.01 3.888 3.284 12.282 10.419 14.47 6.377 1.956 9.38-6.443 14.749-8.534 3.12-1.216 6.547-2.012 5.329-6.375-.841-3.017-3.32-3.792-6.013-2.633-4.63 1.99-6.202 10.097-11.691 10.242-5.68.15-6.295-8.037-8.733-11.603-3.717-5.435-11.358-6.748-15.7-1.55-1.311 1.567-7.967 10.742-3.345 11.743M693.987 119.327c3.376 2.31 10.104 2.23 13.214-.635 3.165-2.915-1.06-3.363-3.638-3.274-1.983.069-5.695 1.052-4.565-2.373 1.003-3.04 6.516-1.492 6.976-4.828-4.15-.744-8.72-.476-11.788 2.785-2.22 2.357-3.36 6.162-.2 8.325" /></g></g></svg>
            </section>
          </div>
          <p className="text-base text-gray-500 mt-8 pr-10">
            Currently, I am a front-end developer with React and Typescript as my main technology stack. But I've also worked with Vue and developed large server-side projects in Nodejs for a few years. In my spare time, I often travel around the city I live in to make life more interesting.
          </p>
        </section>
        <section className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
          <Link href="/blog" passHref>
            <a className="block font-normal text-center sm:w-auto bg-blue-600 hover:bg-blue-500 text-white text-lg leading-6 py-3 px-16 rounded-md focus:outline-none transition-colors duration-200">Visit Blog</a>
          </Link>
        </section>
      </main>
      <Footer />
    </article>
  )
}