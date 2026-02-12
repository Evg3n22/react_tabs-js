import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': activeTabId === tab.id })}
              data-cy="Tab"
              id={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (activeTabId !== tab.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}

          {/* <li className="is-active" data-cy="Tab">
              <a href="#tab-1" data-cy="TabLink">
                Tab 1
              </a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-2" data-cy="TabLink">
                Tab 2
              </a>
            </li>

            <li data-cy="Tab">
              <a href="#tab-3" data-cy="TabLink">
                Tab 3
              </a>
            </li> */}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTabId)?.content}
      </div>
    </div>
  );
};
