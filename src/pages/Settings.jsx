import { useState } from "react";

function Settings() {

  const [restaurant, setRestaurant] = useState({
    name: "Lumière Hotel & Restaurant",
    phone: "+91 98765 43210",
    email: "hello@lumiere.com",
    address: "Vellore, Tamil Nadu",
  });

  const updateField = (field, value) => {
    setRestaurant({
      ...restaurant,
      [field]: value,
    });
  };

  const saveSettings = () => {
    localStorage.setItem(
      "restaurantSettings",
      JSON.stringify(restaurant)
    );

    alert("Settings saved successfully!");
  };

  return (
    <div className="page settings-page">

      <div className="settings-heading">

        <div>
          <span className="eyebrow">SYSTEM CONTROL</span>

          <h1>Settings</h1>

          <p>
            Manage your restaurant workspace.
          </p>
        </div>

      </div>


      <div className="settings-layout">

        <aside className="settings-nav">

          <div className="settings-brand">
            <div>L</div>

            <span>
              LUMIÈRE
              <small>RESTAURANT</small>
            </span>
          </div>

          <button className="settings-active">
            General
          </button>

          <button>
            Restaurant
          </button>

          <button>
            Billing
          </button>

          <button>
            Tax & Invoice
          </button>

          <button>
            Appearance
          </button>

        </aside>


        <section className="settings-content">

          <div className="settings-section">

            <span className="eyebrow">
              RESTAURANT PROFILE
            </span>

            <h2>General information</h2>

            <p>
              Basic information shown throughout your POS.
            </p>


            <div className="form-grid">

              <label>
                Restaurant name

                <input
                  value={restaurant.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                />
              </label>

              <label>
                Phone number

                <input
                  value={restaurant.phone}
                  onChange={(e) =>
                    updateField("phone", e.target.value)
                  }
                />
              </label>

              <label>
                Email address

                <input
                  value={restaurant.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                />
              </label>

              <label>
                Location

                <input
                  value={restaurant.address}
                  onChange={(e) =>
                    updateField("address", e.target.value)
                  }
                />
              </label>

            </div>

          </div>


          <div className="settings-section">

            <span className="eyebrow">
              BILLING PREFERENCES
            </span>

            <h2>Invoice settings</h2>

            <div className="setting-option">

              <div>
                <strong>GST calculation</strong>
                <span>Apply 5% GST automatically</span>
              </div>

              <div className="toggle active">
                <span></span>
              </div>

            </div>

            <div className="setting-option">

              <div>
                <strong>Receipt printing</strong>
                <span>Generate printable receipt after billing</span>
              </div>

              <div className="toggle active">
                <span></span>
              </div>

            </div>

          </div>


          <button
            className="save-settings"
            onClick={saveSettings}
          >
            Save changes →
          </button>

        </section>

      </div>

    </div>
  );
}

export default Settings;